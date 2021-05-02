/*
    Simple file FS:
        - fs.writeFile(file, data[, options], callback)
        - fs.writeFileSync(file, data[, options], callback)
            - file: path of the file
            - data: content to be written
            - options: options to be specified
                - flag: 
                    - r: only read
                    - w: only write
                    - a: append
            - callback: call back function to be runwhen finished
*/

var fs = require("fs")
var content = "Content to be written by simple write\n"
var options = {
    flag:"a"
}
fs.writeFile("./2_file_system/hello4.txt", content, options, function(err){
    if (!err){
        console.log("write successfully.")
    } else {
        console.log(err)
    }
})



