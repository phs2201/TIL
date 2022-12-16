init ()

function init() {
    setAddEvent(); // 내용 추가하는 이벤트 엔터눌렸을 떄
    setPriorData(); // 기존데이터 가져오기
    setFilter(); // 가져온 데이터 바탕으로 all , complete 눌렀을때 기준에 따라 보이도록
}

async function getData() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then(result => result)
}

async function setPriorData() { // 기존 데이터 가져오는 기능
    const data = await getData()
    const ul = document.querySelector('ul')

    data.forEach(e => { // 각각의 요소를 e로 받음
        if(e.id < 5) {
            ul.appendChild(createListDom(e.title, e.completed)) //ul 안에 li로 채우기
        }
    })
}

function createListDom(title, completed) { // title:할일들
    let li = document.createElement('li') // completed 가 조건 true면 checked함 아니면 공백
    li.innerHTML = ` 
        <input type="checkbox" ${completed ? 'checked' : ''}> 
        <div>${title}</div>
        <button>X</button>
    `
    let delBtn = li.querySelector('button') // li안에 있는 button을 추적
    delBtn.addEventListener('click', removeParent) // 눌린 요소의 타겟의 부모 태그를 지워야 함
    return li
}

function removeParent({target}) {
    target.parentElement.remove() // 타겟의 부모태그를 지워줌
}

function setAddEvent() {
    const input = document.querySelector('input') // input 이벤트 걸 준비
    const button = document.querySelector('button') // button 이벤트 걸 준비

    input.addEventListener('keyup', (event) => {
        event.key == 'Enter' ? inputToList() : '';
    }) 
    button.addEventListener('click', () => {
        inputToList()
    })
}

function inputToList() {
    const ul = document.querySelector('ul') // ul 태그를 가져온다
    const input = document.querySelector('#input') // id값으로 가져오기
    if(input.value) { // input.value 값이 실제 있을 때 함수를 실행
        createListDom(input.value, false)
        ul.appendChild(createListDom(input.value, false)) // 값을 넣어준다
        input.value = ''
    }
}

function setFilter() {
    let filterBtns = document.querySelectorAll('.filter')
    filterBtns.forEach(btn => { // 각각의 요소를 돌면서 반복하겠다
        btn.addEventListener('click', () => {
            filterList(btn.dataset.kind)
        })
    })
}

function filterList(kind) {
    if(kind == 'all') displayAll();
    if(kind == 'completed') displayCompleted();
    if(kind == 'todo') displayTodo()
}

function displayAll() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = 'flex'
    })
}

function displayCompleted() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = li.children[0].checked ? 'flex' : 'none' // input값이 true만 
    })
}

function displayTodo() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = !li.children[0].checked ? 'flex' : 'none' // displaycomplete와 반대로 !를 넣어줘서
    })
}