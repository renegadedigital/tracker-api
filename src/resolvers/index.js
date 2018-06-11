import jwd from "jsonwebtoken"



const knownUsers = {
  admin: "admin",
  athlete: "athlete",
  coach: "coach",
  guest: "guest",
}



export default {
  logIn: ({ email, password }) => {
    if( !(email in knownUsers) ) return null 
    if( knownUsers[email] !== password ) return null

    const role = email
    return jwd.sign({ role, email }, "secret")
  }
}
