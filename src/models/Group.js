import { DATE, ENUM, INTEGER, STRING } from "sequelize"

import orm from "../helpers/orm"



export default orm.define("group", {
  id:        { type: INTEGER, autoIncrement: true, primaryKey: true },
  name:      STRING,
  logo:      STRING,
  type:      ENUM("group", "team"),
  createdAt: DATE,
  updatedAt: DATE
})
