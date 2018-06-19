import { DATE, INTEGER, STRING } from 'sequelize'

import orm from '../helpers/orm'



export default orm.define("athlete", {
  id:            { type: INTEGER, autoIncrement: true, primaryKey: true },
  photo:         STRING,
  createdAt:     DATE,
  updatedAt:     DATE
}, {
  getterMethods: {
    email() { return this.account.email },
    firstName() { return this.account.firstName },
    lastName() { return this.account.lastName }
  }
})
