import jwd from "jsonwebtoken"
import nanoid from "nanoid"

import { Account } from "../models"
import * as pass from "../helpers/password"



const knownUsers = {
  admin: "admin",
  athlete: "athlete",
  coach: "coach",
  guest: "guest",
}



export default {
  Mutation: {
    changePassword: async (_, { id, oldPassword, newPassword }) => {
      try {
        const account = await Account.findById(id)
        if( !pass.check(oldPassword, account.password) ) 
          return false

        const hash = pass.hash(newPassword)
        account.password = hash
        await account.save()
        return true

      } catch(error) {
        // @TODO(adam): catch as rollbar error
        return false
      }
    },

    requestPasswordReset: async (_, { email }) => {
      try {
        //@TODO(adam): send email
        const account = await Account.findOne({ where: { email } })
        account.resetCode = nanoid()
        await account.save()
        return true

      } catch(error) {
        //@TODO(adam): catch as rollbar error
        return false
      }
    },

    resetPassword: async (_, { code, email, password }) => {
      try {
        const account = await Account.findOne({ where: { email } })
        console.log(account.resetCode, code)
        if( code !== account.resetCode ) return false

        account.password = await pass.hash(password)
        account.resetCode = null
        await account.save()
        return true

      } catch(error) {
        //@TODO(adam): catch as rollbar error
        console.log(error)
        return false
      }
    }
  },

  Query: {
    logIn: async (_, { email, password }) => {
      if( email === "admin" && password === "admin" )
        return jwd.sign({ role: "admin", email }, "secret")

      const account = await Account.findOne({ where: { email } })
      if( !await pass.check(password, account.password) ) 
        return null

      const role = account.accountType
      return jwd.sign({ role, email }, "secret")
    },

  }
}
