// Polyfill of call

let user ={
    name:'atul'
}

printWithoutArgs = function() {
    console.log('Hey there this is ' + this.name);
}

printWithArgs = function(city) {
    console.log('Hey there this is ' + this.name + ' from ' + city);
}

//polyfill of call
Function.prototype.myCall = function(context={},...args) {
    
    //check if the function is callable or not
    if(typeof this !== 'function'){
        throw new Error(this + ' is not a funtion');
    }
    context.fun = this;
    context.fun(...args);
}

printWithoutArgs.myCall(user) // Hey there this is atul
printWithArgs.myCall(user,'Kolkata') // Hey there this is atul from Kolkata




