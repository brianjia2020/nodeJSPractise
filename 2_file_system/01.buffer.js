/*
    Buffer
        - buffer is very similar to java array.
        - array cannot store bytes, buffer is to address that
        - buffer is a core lib
        - buffer stores bytes data
*/

var str = "Hello Atguigu";

//store a string into Buffer
var buf = Buffer.from(str)

console.log(buf.length)
console.log(str.length)

console.log(buf)
