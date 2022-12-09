/*// 1. 입력에 대한 이벤트 리스너 등록하기
// 할 일을 추가하기 위해서는 <input>요소로부터 이벤트 리스너를 등록하여, 이벤트를 캐치한 후, 입력받은 데이터를 배열에 순차적으로 담아야 함
const todoInputElem = document.querySelector('.todo-input'); // input요소를 가져오기 위해 querySelector를 사용

let todos =[]; // 할 일을 담을 배열
let id = 0; // 각각의 할 일을 유니크하게 구별할 수 있는 키 값을 설정하기 위해

// init 함수는 todo.js 파일이 실행되자마다 호출되는 함수이다
// input 요소를 담은 todoInputElem에 'keypress'에 대한 이벤트 리스너를 등록시킨다. 
// 만약 입력되는 값이 'Enter'라면 appendTodos()함수에 e.target.value(input의 value)를 넘겨주고,
// todoInputElem의 value 값을 초기화한다.
function init() {
    todoInputElem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            appendTodos(e.target.value); todoInputElem.value = '';
        }
    });
}

init()
// 2. 할 일 추가하기
// 할 일의 타입 {id : number, isCompleted:boolean, content:stirng} id:유니크한 값, isCompleted : 할일의 완료상태, content:할일의 내용
// newId는 새롭게 저장되는 할 일의 id 값이며, ++연산자를 통해 1씩 증가시킴으로써 id값이 중복되지 않게 해줌
// newTodos 새롭게 저장될 todos 배열로 getAllTodos() 함수를 통해 이전 todos 배열을 가져온 후, 새롭게 추가된 할 일을 concat()을 통해 추가된 배열을 newTodosdp 저장한다.

const setTodos = (newTodos) => {
    todos = newTodos;
}
const getAllTodos = () => {
    return todos;
}
const appendTodos = (text) => {
    const newId = id++;
    const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content:text})
    // 스프레드 연산자 사용할 경우
    // const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text}]
    setTodos(newTodos)
    paintTodos();
}*/

const button = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input')

button.addEventListener('click',()=>{
    console.log(input.value)
    let li = document.createElement('li')
    li.innerText = input.value
    ul.appendChild(li)
    input.value=''
})

input.addEventListener('keyup', (event)=> {
    console.log(event.key)
    if (event.key =='Enter') {
        console.log("enter key")
    }
})

















