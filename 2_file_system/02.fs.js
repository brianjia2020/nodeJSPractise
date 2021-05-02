/*
    File System:
        - file system is to read/write files in the system
        - import fs module which is a core lib
        - readFile vs readFileSync, asynchronous vs synchronous
    File writer:
        - open the file, fs.openSync(path, flags[, mode])
            - path: path of file to be opened
            - flags: operation will be performed on the files
                - r: read
                - w: write
            - mode: access rights
        - write content to the file
            fd.writeSync(fd, string)
            - fd is the file descriptor
            - string is the content
        - close the file stream
*/

const fs = require("fs")

// console.log(fs)

//Synchronous version
var fd = fs.openSync("./2_file_system/hello.txt", "w")
// console.log(fd)
fs.writeSync(fd, "I am Brian.")

fs.closeSync(fd)

