var hello = require("./helloModule")

console.log(hello.name)
console.log(hello.age)
hello.sayName()


console.log(arguments.callee + '')