function randomFn(a, ...rest) {
    console.log(`a is :${a}`);
    for (let index of rest) {
        console.log(`for rest, ${index}`);
    }
}

randomFn(1,22,3,4,5,5);