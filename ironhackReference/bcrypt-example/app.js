

const bcrypt     = require("bcrypt");
// const saltRounds = 10;


const salt  = bcrypt.genSaltSync(10);
const hash1 = bcrypt.hashSync("HelloWorld", salt); //thing you want to hash, then the salt
const hash2 = bcrypt.hashSync("helloworld", salt);

console.log("Hash 1 -", hash1);
console.log("Hash 2 -", hash2);