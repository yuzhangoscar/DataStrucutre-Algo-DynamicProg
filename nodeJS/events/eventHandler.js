const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log(`response event triggered one`);
});

customEmitter.emit('response');

customEmitter.on('response', () => {
    console.log(`response event triggered two`);
});
