function remember(input) {
    if(!remember.storage) {
        remember.storage = {};
    }
    if(!remember.storage[input]) {
        remember.storage[input] = true;
        console.log(`a new entry was saved.`);
    }
    else console.log(`this entry has been saved before`);
}

remember(1);
remember(2);
remember(1);