/*
    Buffer
        - buffer is very similar to java array.
        - array cannot store bytes, buffer is to address that
        - buffer is a core lib
        - buffer stores bytes data, ranging from 00 to ff
            - ff to 255 
            - wich is 0000,0000 - 1111,1111 (8 bits equal to 8 slots on memory)
            - 8 bits is a one byte
            - 1024 byte is 1KB, 1024KB is 1MB, 1024 megabyte is 1GB, 1024GB is 1TB
        - buffer size cannot be changed once settled. It's an object that directly
          manipulate the memory
*/

var str = "我爱你"

//"Hello Atguigu";

//store a string into Buffer
var buf = Buffer.from(str)

console.log(buf.length) //slots occupied by string in memory - english is okay, but chinese will not be euqal
console.log(str.length) //length of string

// console.log(buf)

//create a fixed size buffer
var buf2 = Buffer.alloc(10, 1);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 256;
console.log(buf2)
