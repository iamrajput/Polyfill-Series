// Polyfill of Apply


let user ={
    name:'atul'
}

printWithoutArgs = function() {
    console.log('Hey there this is ' + this.name);
}

printWithArgs = function(city) {
    console.log('Hey there this is ' + this.name + ' from ' + city);
}

//polyfill of apply
Function.prototype.myApply = function(context={},arr = []) {
    
    //check if the function is callable or not
    if(typeof this !== 'function'){
        throw new Error(this + ' is not a funtion');
    }
    // we need to check here if the argument is funtion or not
    if(!Array.isArray(arr)){
        throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    //let's add funtion to context
    context.fun = this;
    context.fun(arr);
}

printWithoutArgs.myApply(user) // Hey there this is atul
printWithArgs.myApply(user,['Kolkata']) // Hey there this is atul from Kolkata




