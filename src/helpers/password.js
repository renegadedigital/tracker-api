import bcrypt from "bcrypt"



export const check = (password, hash) => bcrypt.compare(password, hash)
export const hash = password => bcrypt.hash(password, 10)
