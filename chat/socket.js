import { io } from "socket.io-client"

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
};

export { setupSocketIO };
