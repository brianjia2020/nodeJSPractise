var fs = require("fs")

//create a read stream

var rs = fs.createReadStream("./2_file_system/hello3.txt")

var ws = fs.createWriteStream("./2_file_system/hello7.txt")

rs.once("open", () => {
    console.log("Read stream is open")
})

rs.once("close", () => {
    console.log("Read stream is close")
    //after the data is 
    ws.end()
})

rs.on("data", (data) => {
    console.log(data)
    ws.write(data);

})

//rs.pipe(ws)

ws.once("open", () => {
    console.log("Write stream is open")
})

ws.once("close", () => {
    console.log("Write stream is close")
})

// ws.on("data", (data) => {
//     console.log(data)
// })


