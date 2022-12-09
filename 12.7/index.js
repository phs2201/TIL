/*const arr = [1,2,3,4]
for(let i = 0; i < arr.length;i++) {
    console.log(arr[i])
}*/

function Cat(name, age) {
    this.name = name
    this.age = age
}

Cat.prototype.speak = function () {console.log("야옹~~", this.name, this.age)}

var cat = new Cat("냥이",1)
cat.speak()

function add2() {
    var sum = 0;
    for(var i= 0; i <arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}
console.log(add2(1,2,2,3))

function add(...args){ 
    let sum = 0 ;
    for (let arg of args) sum += arg;
    
    return (`${arguments[0]}+${arguments[1]} = ${sum}`)
    
}
console.log(add(1,2,3))


/*function cal() {
    if (arguments[0] == "+"){
        var result = 0;
        for(var i = 1; i < arguments.length; i++) 
        result += arguments[i];
    }
    else if(arguments[0] == "-"){
        var result = arguments[1];
        for(var i = 2; i < arguments.length; i++) 
        result -= arguments[i];
    }
    else if(arguments[0] == "*"){
        var result = arguments[1];
        for(var i = 1; i < arguments.length; i++) 
        result *= arguments[i];
    }
    else if(arguments[0] == "/"){
        var result = arguments[1];
        for(var i = 1; i < arguments.length; i++) 
        result /= arguments[i];
    }
    return result;
} 

console.log(cal("-",5,6,2,1,45))*/