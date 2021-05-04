/*
    fs.readFile(path[, options], callback)
    fs.readFileSync(path[, options])
        - path
        - options
        - callback
*/

var fs = require("fs")

fs.readFile("./2_file_system/hello3.txt", (err, data) => {
    if(!err){
        // console.log(data.toString())
        //write data back to file
        fs.writeFile("./2_file_system/hello6.txt", data, (err) => {
            if(!err){
                console.log("File writes successfully.")
            }
        })
    }
    // fs.close()
})

