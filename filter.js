let array = [1,4,2,5,6]

Array.prototype.myFilter = function(callback) {
	let output = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			output.push(this[i]);
		}
	}
	return output;
};

const output = array.myFilter((arr) => arr > 3);
console.log(output);

// const users = [
// 	{ firstName: 'atul', lastName: 'singh', age: 20 },
// 	{ firstName: 'aman', lastName: 'singh', age: 10 },
// 	{ firstName: 'sanchu', lastName: 'singh', age: 30 },
// 	{ firstName: 'manchu', lastName: 'singh', age: 50 }
// ];
// const output = users.map((user) => {
// 	return user.firstName + ' ' + user.lastName;
// });

// const getAge = users.reduce(function(acc, curr) {
// 	if (acc[curr.age]) {
// 		acc[curr.age] += 1;
// 	} else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});

//console.log(getAge);

// const firstname = users
// 	.filter((user) => {
// 		return user.age > 20;
// 	})
// 	.map((user) => {
// 		return user.firstName;
// 	});

// console.log(firstname);

// const ages = users.reduce((acc, curr) => {
// 	if (curr.age > 20) {
// 		acc.push(curr.firstName);
// 	}
// 	return acc;
// }, []);

// console.log(ages);
