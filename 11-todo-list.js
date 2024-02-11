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
        `<p>
            ${name} ${dueDate}
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
    let name = inputElement.value;
    const inputDate = document.querySelector('.js-dueDate');
    console.log(inputDate);
    let dueDate = inputDate.value;
    todo.push({
        name,
        dueDate
    });

    
    

    
    
    console.log(todo);
    

    inputElement.value = '';
    func();
}