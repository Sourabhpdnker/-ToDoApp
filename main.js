let todoList = [
    // {
    //     item: 'study OS ',
    //     duedate: '04/01/2024',
    // },
    // {
    //     item: 'study java ',
    //     duedate: '04/01/2024',
    // },
    // {
    //     item: '',
    //     duedate: '',
    // }
    //by using above concept we have created arrray of object

];
displayTodoItem();


function addToDo() {
    let inputElement = document.querySelector('#task-input');
    let dateElement = document.querySelector('#date-input');
    let todoItem = inputElement.value;
    let dateItem = dateElement.value;
    todoList.push({item:todoItem , duedate : dateItem});
    inputElement.value = '';
    dateElement.value = '';

    displayTodoItem();
}

function displayTodoItem(){
    let containerElement = document.querySelector('.container-items');
    let newHtml = '';

    for(let i=0;i<todoList.length;i++){
        let item = todoList[i].item;
        let duedate= todoList[i].duedate;
        newHtml += `
            <div class="task-container2">
            <h4>${i+1} : ${item}</h4>
            <div class="task-con-child">
            <p>${duedate}</p>
            <button class="delete-button" onclick="todoList.splice(${i} , 1);
            displayTodoItem();">Delete</button>
            </div>
            </div>
             `;
    }
    containerElement.innerHTML = newHtml;
   
}
