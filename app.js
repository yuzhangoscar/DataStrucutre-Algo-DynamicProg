function originalFunc (input) {
    return this.a + input;
}

const objectA = {
    a: 9.9
}

function wrapper() {
    return originalFunc.apply(objectA, arguments);
}

let result = wrapper(1);

console.log(result);
