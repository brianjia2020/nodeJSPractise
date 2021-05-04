var fs = require("fs")

var path = "./2_file_system"
// var isExists = fs.existsSync(path)
// console.log(isExists)

fs.stat(path, (err, stat) => {
    console.log(stat.isDirectory())
    console.log(stat.size)
})