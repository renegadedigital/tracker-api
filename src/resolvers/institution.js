import Sequelize from 'sequelize'

import { Institution } from '../models'



export default {
  Mutation: {
    createInstitution: async (_, { institution }) => Institution.create(institution),

    deleteInstitution: async (_, { institutionId }) => {
      const found = await Institution.findById(institutionId)
      return await found.destroy()
    },

    updateInstitution: async (_, { institution }) => {
      const found = await Institution.findById(institution.id)
      await found.update(institution)
      return found
    },
  },

  Query: {
    institution: (_, { id }) => Institution.findById(id),

    institutions: (_, conditions) => {
      if( conditions.name )
        conditions.name = { [Sequelize.Op.iLike]: `%${conditions.name}%` }

      return Institution.findAll({ where: conditions })
    }
  }
}
