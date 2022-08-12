function fn(a, b) {
    console.log(a, b);
}

const partialFn = function(a) {
    return fn(a, 'b');
}

partialFn('a');