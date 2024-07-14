import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { generateRandomUsername } from './utils.js'

const app = express();
const PORT = 4000;
const server = createServer(app);
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.static(path.join(path.resolve(), 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
});

io.on('connection', (socket) => {
    const username = generateRandomUsername();
    console.log(`${username} connected`);

    socket.on('disconnect', () => {
        console.log(`${username} user disconnected`);
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', `${username}: ${msg}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
