import { io } from "socket.io-client"
import { animate } from "./animation";

const socket = io();

const setupSocketIO = () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    
    document.addEventListener('DOMContentLoaded', () => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (input.value) {
                socket.emit('chat message', input.value);
                input.value = '';
            }
        });

        socket.on('chat message', function (msg) {
            var item = document.createElement('li');
            item.textContent = msg;
            document.getElementById('messages').appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            console.log(`Front end log: arrow key pressed: ${key}`);
            socket.emit('arrow key pressed', key);
        }
    });

    socket.on('arrow key pressed', (key) => {
        console.log(`Received arrow key press from server: ${key}`);
        animate('right');
    });
};

export { setupSocketIO };
