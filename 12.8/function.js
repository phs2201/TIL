// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declartion
// function name(param1, param2) {body ... return;}
// 하나의 함수는 한가지 일만 해야함
// naming : -ing, command, verb
// 함수는 object임 in JS

function log(message){
    console.log(message);
}
log('hellow');
// 2. 파라미터
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);
console.log('--------------');

// Question 1. array = [2,3,4,5,6,7,8]
//          2. commands = [[1,2,3], [1,2,2]] i,j,k
//          3. 


/*let a = [1,5,2,6,3,7,4]
let commands =[[1,3,3],[2,3,4]]// i=2, j=5, k=3
let b = a.slice(commands[0][0],commands[0][1]);
let c = b.sort();
console.log(b);
console.log(c.slice(commands[0][2]));

console.log(a);
//function kn(array, commands){
  //  let a = array.slice

//}
// commands = [[1,2,3],[2,3,4]]
let f = [[2,5,3],[3,3,3],[2,1,2]]
//console.log(f[0][0], f[0][1]);*/


let array = [1,5,2,6,3,7,4];
let commands = [
    [2,5,3],
    [4,4,1],
    [1,7,3],
]

function solution (array, commands){
    return commands.map(
        ([from, to, k]) =>
        array.slice(from -1, to).sort((a,b)=> a -b)[k-1],
    );
}

console.log(solution(array,commands));

// 4. Rest parameters (added in Es6)
function printAll(...args){
    for (let i =0 ; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'conding', 'ellie');



