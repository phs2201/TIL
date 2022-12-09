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

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to change.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!! 
// Immutabale data types; premitive types, frozen objects (i.e. object.freez())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:

// 4. Variable types
// primitive, single item : number, stirng, boolean, null, underfined, symbol
// object, box container
// function, first-class function

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope
{age =4 ;
var age;
}
console.log(age);
//primiaty

const count = 17; // integer
const size = 17.1 ; // decimal nuber
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

//number - speical number values :infinity, -infinity, Na
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
//string
const char ='c';
const brendan = 'brendan';
const greeting = 'hellow ' + brendan;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


//boolean
// false : 0, null, undefined, Nan, ''
// true : any ohter value
const canRead = true ;
const test = 3 <1; // false
console.log(`value : ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value:${nothing}, type;${typeof nothing}`)

//undefined
let x;
console.log(`value:${x}, type : ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`) // value : id, type; symbol

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value :${text}, type : ${typeof text}`);
text = 1;
console.log(`value:${text}, type: ${typeof text}`);
text='7' + 5;
console.log(`value:${text}, type : ${typeof text}`);
text = '8'/'2';
console.log(`value : ${text}, type: ${typeof text}`);

//object, real-life object, data structure
const ellie = { name:'ellie', age:20};
ellie.age =21 ;
console.log(ellie.name);
console.log(ellie.age);