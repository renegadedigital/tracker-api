import Sequelize from "sequelize"

import { Account, Athlete, AthleteGroup, Group, Institution } from "../models"



export default {
  Mutation: {
    createTeam: async (_, { team }) => {
      const found = await Group.create({ ...team, type: "team" }, { include: [{ ...Athlete, as: "players" }] })
      await found.setAthletes(team.athleteIds)
      return await Group.findById(found.id, { include: [{ ...Athlete, as: "players" }] })
    },

    deleteTeam: async (_, { teamId }) => {
      const found = await Group.findById(teamId)
      return await found.destroy()
    },

    updateTeam: async (_, { team }) => {
      const found = await Group.findById(team.id)
      await found.update(team)
      if( team.athleteIds ) await found.setAthletes(team.athleteIds)
      return await Group.findById(found.id, { include: [{ ...Athlete, as: "players" }] })
    },
  },

  Query: {
    team: (_, { id }) => Group.findById(id, { 
      where: { type: "team" },
      include: [{ ...Athlete, as: "players" }, Institution] 
    }),

    teams: (_, conditions) => {
      if( conditions.name )
        conditions.name = { [Sequelize.Op.iLike]: `%${conditions.name}%` }

      return Group.findAll({
        where: { ...conditions, type: "team" }, 
        include: [{ ...Athlete, as: "players" }, Institution] 
      })
    },
  },

  Team: {
    players: team => AthleteGroup.findAll({ where: { groupId: team.id } })
  }
}
