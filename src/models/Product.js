import { DATE, FLOAT, INTEGER, STRING } from "sequelize"

import orm from "../helpers/orm"



export default orm.define("product", {
  id:            { type: INTEGER, autoIncrement: true, primaryKey: true },
  description:   STRING,
  name:          STRING,
  price:         FLOAT,
  timeAddition:  STRING,
  createdAt:     DATE,
  updatedAt:     DATE
})
