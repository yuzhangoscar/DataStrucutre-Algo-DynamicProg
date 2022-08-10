const uniqueFunctionStorage = {
    id: 1,
    store: function(fn) {
        console.log(`fn.id is ${fn.id}`);
        if (!fn.id) {
            fn.id = this.id++;
            console.log(`new function stored`);
        }
        else
            console.log(`function already stored`);
    }
}

function One() {};
function Two() {};

console.log(One.id);
uniqueFunctionStorage.store(One);
console.log(One.id);
uniqueFunctionStorage.store(One);
console.log(One.id);
uniqueFunctionStorage.store(Two);
console.log(Two.id);

if(0) {
    console.log(`0 is true`);
}

if(!0) {
    console.log(`0 is false`);
}