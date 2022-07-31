function genericFunc(a) {
    return `inside of genericFunc, input is ${a}, and this.a is ${this.a}`;
}

const objectA = {
    a: 9
}

function bind(fn, obj) {
    return function() {
        return fn.call(obj, arguments);
    }
}

const boundFunc = bind(genericFunc, objectA);
console.log(boundFunc(5));

// function hardbind() {
//     return genericFunc.apply(objectA, arguments);
// }

// const newHardbindFunc = hardbind(5);
// console.log(newHardbindFunc);
