const dnd = {}




const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(element => {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        element.classList.add('dragging');
    });
    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
    });
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
});

containers.forEach(element => {
    element.addEventListener('dragover', (event) => {
        event.preventDefault();
        element.classList.add('draggedOver');
    });
    element.addEventListener('dragenter', (event) => {
        event.preventDefault();
    });
    element.addEventListener('dragleave', () => {
        element.classList.remove('draggedOver');
    });
    element.addEventListener('drop', () => {
        const id = event.dataTransfer.getData('text/plain');
        const draggable = document.querySelector(`#${id}`);
        const containerParent = event.target.closest('.container');

        if (containerParent) {
            containerParent.appendChild(draggable);
            containerParent.classList.remove('draggedOver');
        }
    })
});

console.log(draggables);
console.log(containers);
