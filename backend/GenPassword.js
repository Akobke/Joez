const bcrypt = require('bcrypt')

let pswrd = bcrypt.hashSync("whatlanguage", 9);
console.log(pswrd);