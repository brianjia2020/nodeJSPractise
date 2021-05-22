class Promise{

    //constructor
    constructor(executor){
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
            setTimeout(()=>{
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                });
            })
        }
        //reject function
        function reject(data){
            //check if state has been changed.
            if(self.PromiseState !== 'pending') return;
            self.PromiseState = 'rejected';
            self.PromiseResult = data;
            //3. invoke the callback function
            setTimeout(()=>{
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                }) 
            });
        }

        try{
            //async invoke executor function
            executor(resolve,reject);
        } catch(e){
            //modify the promise state as reject when handling an error
            reject(e);
        }   
    }

    //then function
    then(onResolved,onRejected){
        const self = this;
        //check the callback function
        if(typeof onRejected !== 'function'){
            onRejected = reason => {
                throw reason;
            }
        }
    
        if(typeof onResolved !== 'function'){
            onResolved = value => value;
        }
    
        return new Promise((resolve,reject) => {
            function callback(type){
                try{
                    //get callback result
                    let result = type(self.PromiseResult);
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
            //call up callback function PromiseState
            if (this.PromiseState === 'fulfilled'){
                setTimeout(()=>{
                    callback(onResolved)
                })
            }
            if (this.PromiseState === 'rejected'){
                setTimeout(()=>{
                    callback(onRejected)
                })
            }
            //check pending state
            if (this.PromiseState === 'pending'){
                //save the callback function
                //better to use an array or list to store all the callbacks
                
                this.callbacks.push({
                    onResolved : function(){
                        callback(onResolved);
                    },
                    onRejected : function(){
                        callback(onRejected);
                    }
                });
            };
        });
    }

    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    //static means it belongs to the class, not instance
    static resolve(value){
        return new Promise((resolve, reject) => {
            if(value instanceof Promise){
                value.then(v=>{
                    resolve(v)
                }, r=>{
                    reject(r)
                })
            } else {
                //successful
                resolve(value);
            }
        })
    }

    static reject(reason){
        return new Promise((resolve, reject)=>{
            reject(reason);
        });
    }

    static all(promises){
        //return a promise object
        return new Promise((resolve,reject)=>{
            //
            let count = 0;
            let arr = [];
            //loop
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    //this promise is successful
                    //every promise object has to be successful
                    count++;
                    arr[i] = v;
                    if(count===promises.length) {
                        resolve(arr);
                    }
                },r=>{
                    reject(r);
                })
            }
        });
    }

    static race(promises){
        return new Promise((resolve, reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    resolve(v);
                },r=>{
                    reject(r);
                })
            }
        })
    }

}
