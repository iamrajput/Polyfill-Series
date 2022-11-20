// Polyfill of map function
// map() method accepts a callback function that executes on every element of the array
// it returns a new array

Array.prototype.myMap = function(callback) {
    const output = []
    for (let index = 0; index < this.length; index++) {
        output.push(callback(this[index],index,this))
    }
    return output;
}

array = [1,4,2,5,6]

//output
// const output = array.myMap((arr,index,array) => {
//     return arr * 2
// })

const output = array.myMap((arr) => {
    return arr * 2
})

console.log(output)  //[ 2, 8, 4, 10, 12 ]
