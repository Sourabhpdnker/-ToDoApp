let todoList = [];
displayTodoItem();


function addToDo() {
    let inputElement = document.querySelector('#task-input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';

    displayTodoItem();
}

function displayTodoItem(){
    let containerElement = document.querySelector('.container-items');
    let newHtml = '';

    for(let i=0;i<todoList.length;i++){
        newHtml += `
            <div class="task-container2">
            <h1>${todoList[i]}</h1>
            <button class="add-button" onclick="todoList.splice(${i} , 1);
            displayTodoItem();">Delete</button>
            </div>
             `;
    }
    containerElement.innerHTML = newHtml;
   
}
