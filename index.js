const fs = require("fs")

const cds = require("./database/cds")

if (!fs.existsSync('database')) {
    fs.mkdirSync(`database`)
}

if (!fs.existsSync('controller')) {
    fs.mkdirSync('controller')
}

if (!fs.existsSync('public')) {
    fs.mkdirSync('public')
}

console.log(cds[0])
console.log(cds[1])
console.log(cds[2])
console.log(cds[3])







