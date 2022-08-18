const storage = {
    id: 1,
    store:[],
    save: function(fn) {
        if(!fn.id) {
            fn.id = this.id++;
            this.store.push(fn);
            console.log(`a new function was added.`);
        }
        else console.log(`function already saved.`);
    }
}

function fnOne() {};
function fnTwo() {};

storage.save(fnOne);
storage.save(fnOne);
storage.save(fnTwo);