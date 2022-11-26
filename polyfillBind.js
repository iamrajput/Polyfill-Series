// Polyfill of Bind

let user ={
    name:'atul'
}

printWithoutArgs = function() {
    console.log('Hey there this is ' + this.name);
}

printWithArgs = function(city) {
    console.log('Hey there this is ' + this.name + ' from ' + city);
}

Function.prototype.myBind = function(context={},...args) {
    
    //check if the function is callable or not
    if(typeof this !== 'function'){
        throw new Error(this + ' is not a funtion');
    }

    //let's add funtion to context
    context.fun = this;

    //Now as we know bind return funtion
    return function(...moreArgs){
        return context.fun(...args,...moreArgs);
    }
}


const newFun = printWithoutArgs.myBind(user)

newFun(); //Hey there this is atul

const newFun1 = printWithArgs.myBind(user)
newFun1('Kolkata') //Hey there this is atul from Kolkata