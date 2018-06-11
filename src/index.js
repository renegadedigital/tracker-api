import cors from 'cors'
import express from "express"
import graphqlHTTP from "express-graphql"

import rootValue from "./resolvers"
import schema from "./schema"



const app = express()
app.use(cors())

app.use("/graphql", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.listen(4000)
