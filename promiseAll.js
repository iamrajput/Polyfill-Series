// Polyfill of promise.all
// Input is array of promises or any values
// Return array of results of input promises
// Wait for all promises to be resolves or any to be rejected
// You will not get result if any of the promise is rejected

Promise.myPolyAll = (promises) => {
	return new Promise((resolve, reject) => {
		const results = [];
		let counter = 0;
        //we need to check if we get promises array
        if(promises.length === 0){
          resolve(results); 
          return; 
        }

		promises.forEach((promise, index) => {
			Promise.resolve(promise)
				.then((res) => {
					results[index] = res;
					counter++;
					if (counter === promises.length) resolve(results);
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
};

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

Promise.myPolyAll(['validate','signup','dropMail']).then((result) => console.log(result)).catch((e) => console.log(e));

//Promise.all([]).then((result) => console.log(result)).catch((e) => console.log(e));
