const myObj = {
    jump: 8
}

function fn() {
    console.log(this.jump);
}

function helperBinder(f, ob) {
    return function() {
        console.log(`this is a modified wrapper`);
        return f.call(myObj, arguments);
    }
}

const newBoundFn = helperBinder(fn, myObj);

newBoundFn(1,2,3);