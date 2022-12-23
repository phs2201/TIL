const json = `{"result" : true, "count":42}`;
const obj = JSON.parse(json);

console.log(obj.count);
//expected output : 42
console.log(obj.result);
//expecte output : true

const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1],
]
const moves = [1,5,3,5,1,2,1,4] 

const result =2+2

console.log(board[0][0])