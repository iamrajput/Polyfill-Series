// Polyfill of promise.race
// Input is array of promises or any values
// Return single promise
// Whichever promise is successfully fulfilled or rejected early  will be 
// executed at first and the rest one's results will not be 
// displayed as an output.

Promise.myPolyRace = (promises) => {
    return new Promise((resolve,reject) => {

         //we need to check if we get promises array
        if(promises.length === 0){
          resolve(results); 
          return; 
        }
        promises.forEach((promise, index) => {
			  Promise.resolve(promise) 
                   .then(data => resolve(data),(e) => reject(e))
		});
    })
}

const validate = new Promise((resolve, reject) => {
	resolve('validation done');
});

const signup = new Promise((resolve, reject) => {
	resolve('signup success');
});

const dropMail = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Mail sent');
	}, 5000);
});


Promise.myPolyRace([validate,signup,dropMail])
       .then(data => console.log(data))
       .catch(e => console.log(e))

// Promise.race([promise1,promise2,promise3])
//        .then(data => console.log(data))
//        .catch(e => console.log(e))       