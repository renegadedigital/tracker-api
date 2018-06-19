import { INTEGER } from 'sequelize'

import orm from '../helpers/orm'



const AthleteGroup = orm.define("athleteGroup", {
  number: INTEGER
}, {
  timestamps: false
})



export default AthleteGroup
