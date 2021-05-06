/**
 * using promise to encapsulate a read file function
 * and use callback by then function
 */


function mineReadFile(path){
    return new Promise((resolve, reject) => {
        //
        require("fs").readFile(path, (err,data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

mineReadFile("./3_promise/resource/context.txt")
.then(value=>{
    console.log(value.toString())
}, reason=>{
    console.log(reason)
})