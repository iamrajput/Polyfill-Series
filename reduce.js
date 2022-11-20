let array = [ 2, 3, 1, 5 ];

// const output = array.reduce((acc,curr) => {
//    return acc + curr
// },0)

// console.log(output)

Array.prototype.myReduce = function(callback,initialValue = null) {
    let acc = initialValue;
    for (let index = 0; index < this.length; index++) {
        acc = callback(acc,this[index],index,this)
    }
    return acc;
}


const output = array.myReduce((acc,curr) => {
   return acc + curr
},0)

console.log(output)


const users = [
	{ firstName: 'atul', lastName: 'singh', age: 20 },
	{ firstName: 'aman', lastName: 'singh', age: 10 },
	{ firstName: 'sanchu', lastName: 'singh', age: 30 },
	{ firstName: 'manchu', lastName: 'singh', age: 50 }
];

// const output2 = array.myReduce((acc,curr) => {
//    return acc + curr
// },0)

// console.log(output2)

const ages = users.myReduce((acc, curr) => {
	if (curr.age > 20) {
		acc.push(curr.firstName);
	}
	return acc;
}, []);

console.log(ages);




