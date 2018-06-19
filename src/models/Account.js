import { DATE, INTEGER, STRING } from 'sequelize'

import orm from '../helpers/orm'



export default orm.define("account", {
  id:            { type: INTEGER, autoIncrement: true, primaryKey: true },
  accountType:   STRING,
  firstName:     STRING,
  lastName:      STRING,
  email:         STRING,
  password:      STRING,
  resetCode:     STRING,
  createdAt:     DATE,
  updatedAt:     DATE
})
