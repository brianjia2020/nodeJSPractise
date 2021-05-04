/*
    Sync, Async, simple writer has issues like writing big content since they load everything
    in memory which may cause out of memory error. Here we will introduce stream.

    For example, to move water from tank A to tank B. I do not need a bowl of same size, I can 
    have a pipe to continuously move water from A to B. This applies to stream writer as well.

    fs.createWriteStream(path, options[])
        1. on can bind an event to the object
        2. once can also bind an event but only happen once
*/


var fs = require("fs")

//stream writer
var ws = fs.createWriteStream("./2_file_system/hello5.txt")
ws.once("open", function(){
    console.log("steam is open....")
})
ws.write("written content by write stream")
ws.write("written content by write stream2")

ws.once("close", () => {
    console.log("stream is closed...")
})
ws.end()