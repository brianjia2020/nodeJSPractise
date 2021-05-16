//self defined promise
function Promise(executor){
    //resolve function
    function resolve(data){

    }
    //reject function
    function reject(data){

    }
    //async invoke executor function
    executor(resolve,reject);
}

//add then function

Promise.prototype.then = function(onResolved, onRejected){

}