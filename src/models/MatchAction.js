import { FLOAT, INTEGER, STRING } from 'sequelize'

import orm from '../helpers/orm'



export default orm.define("matchAction", {
  id:               { type: INTEGER, autoIncrement: true, primaryKey: true },
  action:           STRING,
  athleteId:        INTEGER,
  substituteId:     INTEGER,
  completedTime:    FLOAT,
  completedPeriod:  INTEGER,
  positionX:        INTEGER,
  positionY:        INTEGER,
}, {
  timestamps: false
})
