import { Account, Athlete, AthleteGroup, Group, Institution } from "../models"
import AthleteEntity from "../models/Athlete"



export default {
  Mutation: {
    createGroup: async (_, { group }) => {
      const found = await Group.create(group, { include: [{ ...Athlete, as: "players" }] })
      return await Group.findById(found.id, { include: [{ ...Athlete, as: "players" }] })
    },

    deleteGroup: async (_, { groupId }) => {
      const found = await Group.findById(groupId)
      return await found.destroy()
    },

    updateGroup: async (_, { group }) => {
      const found = await Group.findById(group.id)
      await found.update(group)

      if( group.players ) {
        await AthleteGroup.destroy({ where: { groupId: group.id } })
        await AthleteGroup.bulkCreate(group.players.map(player => ({ ...player, groupId: group.id })))
      }

      return await Group.findById(found.id, { include: [{ ...Athlete, as: "players" }] })
    },
  },

  Group: {
    players: group => AthleteGroup.findAll({ where: { groupId: group.id } })
  },

  Player: {
    athlete: player => AthleteEntity.findById(player.athleteId, { include: [Account] })
  },

  Query: {
    group: (_, { id }) => Group.findById(id, { include: [{ ...Athlete, as: "players" }, Institution] }),
    groups: (_, conditions) => Group.findAll({ where: conditions, include: [{ ...Athlete, as: "players" }, Institution] }),
  }
}
