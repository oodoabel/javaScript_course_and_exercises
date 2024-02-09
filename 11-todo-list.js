const todo = ['mike', 'gabriel'];
func();


function func(){
    let value = [];
for(let i = 0; i < todo.length; i++){
    const item = todo[i];
    const html = 
    `<p>
        ${item}
        <button onclick = "
        todo.splice(${i}, 1);
        func();
        ">Delete</button>
    </p>`;
    value += html;

}
document.querySelector('.js-space')
    .innerHTML = value;
}

function addTodo (){
    const inputElement = document.querySelector('.js-toDo');
    let name = inputElement.value
    todo.push(name);
    
    

    
    
    console.log(todo);
    

    inputElement.value = '';
    func();
}