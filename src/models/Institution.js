import { DATE, INTEGER, STRING } from 'sequelize';

import orm from '../helpers/orm'



export default orm.define("institution", {
  id:           { type: INTEGER, autoIncrement: true, primaryKey: true },
  name:         STRING,
  logo:         STRING,
  athleteLimit: INTEGER,
  coachLimit:   INTEGER,
  createdAt:    DATE,
  updatedAt:    DATE
})
