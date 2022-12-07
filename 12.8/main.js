// 1. Use strict

// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict'; 
console.log(age);
// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope
{age =4 ;
var age;
}
console.log(age);