import Sequelize, { DATE, FLOAT, INTEGER, STRING, VIRTUAL } from 'sequelize'
import zipObject from "lodash/zipObject"

import { MatchAction } from './'
import orm from '../helpers/orm'



const foulActions = ["foul"]
const scoreActions = ["2ptMade", "3ptMade"]



export default orm.define("match", {
  id:               { type: INTEGER, autoIncrement: true, primaryKey: true },
  away:             STRING,
  awayFouls:        INTEGER,
  awayScore:        INTEGER,
  createdAt:        DATE,
  homeFouls:        VIRTUAL,
  homeId:           INTEGER, 
  homeScore:        VIRTUAL,
  numStatisticians: INTEGER,
  period:           INTEGER,
  periodDuration:   FLOAT,
  periodPausedAt:   DATE,
  periodStartedAt:  { type: DATE, allowNull: true },
  periods:          INTEGER,
  scheduledAt:      DATE,
  updatedAt:        DATE,

}, {
  hooks: {
    afterFind: async (instances, options, fn) => {
      if( !instances ) return 
      const all = Array.isArray(instances) ? instances : [instances]
      const allIds = all.map(instance => instance.id)
      const results = await MatchAction.findAll({
        where: { matchId: allIds, action: [...scoreActions, ...foulActions] },
        attributes: [ 
          "action",
          "matchId",
          [Sequelize.fn("COUNT", Sequelize.col("action")), "count"]
        ],
        group: ["action", "matchId"]
      })

      const foulCounts = zipObject(allIds, [...allIds].fill(0))
      const scoreCounts = zipObject(allIds, [...allIds].fill(0))

      results.forEach(result => {
        const { action, count, matchId } = result.toJSON()
        if( scoreActions.includes(action) )
          scoreCounts[matchId] += parseInt(action.substr(0, 1)) * count

        if( foulActions.includes(action) )
          foulCounts[matchId] += count
          
      })

      all.forEach(instance => {
        instance.setDataValue("homeScore", scoreCounts[instance.id])
        instance.setDataValue("homeFouls", foulCounts[instance.id])
      })
    }
  },

  getterMethods: {
    homeFouls() { return this.getDataValue("homeFouls") || 0 },
    homeScore() { return this.getDataValue("homeScore") || 0 }
  }
})
