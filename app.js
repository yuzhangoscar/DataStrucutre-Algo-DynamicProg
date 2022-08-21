function randomFn(a, ...rest) {
    let sum = a;
    console.log(`a is :${a}`);
    for (let index of rest) {
        sum += index;
    }
    return sum;
}

console.log(randomFn(1,22,3,4,5,5));