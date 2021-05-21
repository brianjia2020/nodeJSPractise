//self defined promise
function Promise(executor){
    //resolve function

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = [];
    const self = this;

    function resolve(data){
        // console.log(this);
        //1. modify object state(promiseState)
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        //2. modify object result(promiseResult)
        self.PromiseResult = data;
        //3. invoke the callback function
        self.callbacks.forEach(item => {
            item.onResolved(data);
        });
    }
    //reject function
    function reject(data){
        //check if state has been changed.
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
        //3. invoke the callback function
        self.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }

    try{
        //async invoke executor function
        executor(resolve,reject);
    } catch(e){
        //modify the promise state as reject when handling an error
        reject(e);
    }   
}

//add then function
Promise.prototype.then = function(onResolved, onRejected){
    const self = this;
    return new Promise((resolve,reject) => {
        //call up callback function PromiseState
        if (this.PromiseState === 'fulfilled'){
            try{
                //get callback result
                let result = onResolved(this.PromiseResult);
                //based on the result, we modify the state
                if(result instanceof Promise){
                    //if it is a promise object
                    result.then(v=>{
                        resolve(v);
                    }, r=>{
                        reject(r);
                    });
                } else {
                    //state result is successful
                    resolve(result);
                }
            } catch (e){
                reject(e);
            }
        }
        if (this.PromiseState === 'rejected'){
            onRejected(this.PromiseResult);
        }
        //check pending state
        if (this.PromiseState === 'pending'){
            //save the callback function
            //better to use an array or list to store all the callbacks
            
            this.callbacks.push({
                onResolved : function(){
                    try{
                        let result = onResolved(self.PromiseResult)
                        //
                        if (result instanceof Promise){
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        } else {
                            resolve(result);
                        }
                    } catch(e){
                        reject(e)
                    }
                },
                onRejected : function(){
                    // console.log("~~~~~failed")
                    try{
                        let result = onRejected(self.PromiseResult)
                        if (result instanceof Promise){
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        } else {
                            resolve(result);
                        }
                    } catch(e){
                        reject(e)
                    }
                }
            });
        };
    });
}