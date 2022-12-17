const todoInput = document.querySelector('.todo-input');
const todoButton = document.getElementsByClassName('todo-button')[0];
const todoList = document.querySelector('.todo-list');

console.log(todoButton);
console.log(todoInput);
console.log(todoList);
todoButton.addEventListener('click', (event) => {
    const newTaskName = todoInput.value;
    todoInput.value = "";
    event.preventDefault();
    const divContainer = document.createElement('div');
    divContainer.classList.add('todo');
    divContainer.innerText = newTaskName;
    const todoTask = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<span class="fas fa-xmark"></span>';
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML= '<span class = "fas fa-check"></span>';
    divContainer.appendChild(todoTask);
    divContainer.appendChild(deleteButton);
    divContainer.appendChild(completeButton);
    todoList.appendChild(divContainer);
    deleteButton.addEventListener('click', deleteButtonEvent);
    completeButton.addEventListener('click', deleteButtonEvent);
},false);

function deleteButtonEvent(e){
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};
