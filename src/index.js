import { SubscriptionServer } from "subscriptions-transport-ws"
import { createServer } from "http"
import { execute, subscribe } from "graphql"
import { graphiqlExpress, graphqlExpress } from "graphql-server-express"
import { makeExecutableSchema } from "graphql-tools"
import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import timesyncServer from "timesync/server"

import rootValue from "./resolvers"
import types from "./types"



const PORT = 4000
const schema = makeExecutableSchema({ typeDefs: types, resolvers: rootValue })

const app = express()
const server = createServer(app)

app.use(cors())
app.use(express.static("docs"))
app.use("/timesync", timesyncServer.requestHandler)
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }))
app.use(
  "/graphiql", 
  (req, res, next) => graphiqlExpress({
    endpointURL: "/graphql",
    subscriptionsEndpoint: `ws://${req.hostname}:${PORT}/subscriptions`
  })(req, res, next)
)

server.listen(PORT, () => {
  console.log(`GraphQL Server now running on http://localhost:${PORT}`)
  new SubscriptionServer(
    { execute, subscribe, schema },
    { server, path: "/subscriptions" }
  )
})
