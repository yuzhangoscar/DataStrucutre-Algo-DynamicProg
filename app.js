function fn(a,b,c) {
    console.log(a+b+c);
}

const partialFn = function(a, b) {
    return fn(a,b,10);
}

partialFn(1,2);