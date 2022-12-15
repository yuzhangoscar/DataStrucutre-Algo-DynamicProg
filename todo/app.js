const todoInput = document.querySelector('.todo-input');
const todoButton = document.getElementsByClassName('todo-button')[0];
const todoList = document.querySelector('.todo-list');

console.log(todoButton);
console.log(todoInput);
console.log(todoList);
todoButton.addEventListener('click', (event) => {
    console.log('hello');
    event.preventDefault();
    const divContainer = document.createElement('div');
    divContainer.classList.add('todo');
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
},false);
