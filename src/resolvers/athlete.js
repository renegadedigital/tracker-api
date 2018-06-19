import Sequelize from "sequelize"
import flatten from "lodash/flatten"

import { Account, Institution } from "../models"
import Athlete from "../models/Athlete"
import * as pass from "../helpers/password"



export default {
  Mutation: {
    createAthlete: async (_, { athlete, password }) => {
      let hash
      if( password ) hash = await pass.hash(password)
      const account = await Account.create({ ...athlete, accountType: "athlete", password: hash })
      const found = await Athlete.create({ ...athlete, ...account.toJSON() })
      return await Athlete.findById(found.id, { include: [Account, Institution] })
    },

    deleteAthlete: async (_, { athleteId }) => {
      const found = await Athlete.findById(athleteId)
      return await found.destroy()
    },

    updateAthlete: async (_, { athlete }) => {
      const found = await Athlete.findById(athlete.id)
      await found.update(athlete)
      if( athlete.groupIds ) await found.setGroups(athlete.groupIds)
      return await Athlete.findById(found.id, { include: [Account, Institution] })
    },
  },

  Query: {
    athlete: (_, { id }) => Athlete.findById(id, { include: [Account, Institution] }),
    athletes: (_, conditions) => {
      let account = Account


      if( conditions.name ) {
        account = { 
          model: account, 
          where: {
            $or: flatten(conditions.name.split(/ +/g).map(word => [
              { "firstName": { [Sequelize.Op.iLike]: `%${word}%` } },
              { "lastName": { [Sequelize.Op.iLike]: `%${word}%` } }
            ]))
          }
        }

        delete conditions.name
      }

      return Athlete.findAll({ where: conditions, include: [account, Institution] })
    }
  }
}
