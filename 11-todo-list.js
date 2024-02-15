const todo = [{name: 'james', dueDate: '2022/12/22'}
, {name: 'jude', dueDate: '2022/12/22'}];
func();


function func(){
    let value = [];
    for(let i = 0; i < todo.length; i++){
        const todoObject = todo[i];
        const  { name, dueDate } = todoObject;
        // const {  } = todoObject;
        
        const html = 
        `   <div>${name}</div>
            <div>${dueDate}</div>
            <button class= "delete-todo-button" onclick = "
            todo.splice(${i}, 1);
            func();
            ">Delete</button>`;
        value += html;

}
document.querySelector('.js-space')
    .innerHTML = value;
}

function addTodo (){
    const inputElement = document.querySelector('.js-toDo');
    let name = inputElement.value;

    const inputDate = document.querySelector('.js-dueDate');
    let dueDate = inputDate.value;
    todo.push({
        name,
        dueDate
    });    

    inputElement.value = '';
    func();
}