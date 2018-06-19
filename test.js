const bcrypt = require("bcrypt")
bcrypt.hash("123", 10)
  .then(hash => bcrypt.compare("123", hash))
  .then(console.log)
