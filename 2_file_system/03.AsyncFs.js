/*
    Asynchronous Write:
        - open a file
        - asynchronous call, result is being directly back by recall function
        - err: err object, is null when no error
        - fd: file descriptor
    
    fs.write(fd, string[, position], callback)
    fs.close()
*/

var fs = require("fs")

var f;

fs.open("./2_file_system/hello3.txt", "w", function(err, fd){
    // console.log("call back function~~~~~~~")
    //call back function will be performed later
    //check if error
    if(!err){
        // console.log(fd)
        fs.write(fd, "This is a asynchronous write content", function(err){
            if (!err){
                console.log("2. write successfully...")
            }
            fs.close(fd, function(err){
                if(!err){
                    console.log("3. file closed successfully")
                }
            })
        })
    } else {
        console.log(err)
    }
})

console.log("1. program continues")