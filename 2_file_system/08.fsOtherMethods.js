var fs = require("fs")

var path = "./2_file_system"
// var isExists = fs.existsSync(path)
// console.log(isExists)

fs.stat(path, (err, stat) => {
    console.log(stat.isDirectory())
    console.log(stat.size)
})

// fs.unlinkSync("./2_file_system/hello6.txt")

fs.readdir("./2_file_system", function(err,files){
    if(!err){
        console.log(files)
    }
})