import { buildSchema } from 'graphql'



export default buildSchema(`
  scalar JWT

  type Query {
    logIn(email: String, password: String) : JWT 
  }
`)
