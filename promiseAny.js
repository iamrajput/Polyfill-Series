// Polyfill of promise.any
// Input is array of promises or any values
// Return single promise
// Already rejected, if the iterable passed is empty.
// When any of the promises in the given iterable fulfills. 
// The fulfillment value is the fulfillment value of the first promise that was fulfilled.
// When all of the promises in the given iterable reject. returns a different error which is known as Aggregated Error 
// which implies that all the promises which are passed in are actually in the rejected state.


Promise.myPolyAny = (promises) => {
    return new Promise((resolve,reject) => {

         //we need to check if we get promises array
        if(promises.length === 0){
          reject(new AggregateError([],"All promises were rejected")); 
          return; 
        }
         
        let counter = 0;
        const errors = [];
        for (let index = 0; index < promises.length; index++) {
            promises[index].then((promise) => {
                resolve(promise)
            }).catch(err => {
                counter++;
                errors[index] = err;
                if(counter === promises.length) {
                    reject(new AggregateError(errors,"All promises were rejected"));
                }
            })
        }
    })
}

const validate = new Promise((resolve, reject) => {
	resolve('validation done');
});

const signup = new Promise((resolve, reject) => {
	resolve('signup success');
});

Promise.myPolyAny([])
       .then((result) => console.log(result))
       .catch((e) => console.log(e));    





