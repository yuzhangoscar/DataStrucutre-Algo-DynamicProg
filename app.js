const elements = document.getElementsByTagName('h1');
const button = document.getElementById('btn');

function buttonEventHandler() {
    let index = elements.length;
    for (let i = index - 1; i >= 0; i--) {
        elements[i].innerHTML = 'hhh';
    }
}

button.addEventListener('click', buttonEventHandler);
