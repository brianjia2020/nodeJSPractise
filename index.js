var a = 4
var fs = require("fs")

console.log(global.a)

/*
 * arguments.callee 
 *    -store the current function objects
 *    -node.js will wrap up this portion inside an function to perform
 *    -function (exports, require, module, __filename, __dirname){}
*/
console.log(arguments.callee + "")




