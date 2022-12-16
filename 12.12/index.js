let data = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then
(result => result)

console.log(data);

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then
    (result => result)

    console.log(data[0].title)
}


function creatList(title) {
    let li= document.createElement('li')
    li.innerHTMl = `
    <input type="checkbox">
    <div>${title}</div>
    <button>X</button>
    `

    return li
}