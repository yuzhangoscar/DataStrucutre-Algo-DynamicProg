function memory(number) {
    if(!memory.cache) {
        memory.cache = {};
    }
    if (!memory.cache[number]) {
        memory.cache[number] = true;
        console.log(`this number was cached`);
    }
    else {
        console.log(`this number has been cached before`);
    }
}

memory(1);
memory(2);
memory(3);
memory(1);
console.log(memory);