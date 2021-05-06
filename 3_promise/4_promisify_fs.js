/**
 * uil.promisify to dynamically encapsulate 
 */

const util = require("util");
const fs = require("fs");

let mineReadFile = util.promisify(fs.readFile)
mineReadFile('./3_promise/resource/context.txt').then(value=>{
    console.log(value.toString())
}, err=>{
    console.log(err)
})