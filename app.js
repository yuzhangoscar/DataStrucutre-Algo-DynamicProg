function outerFn() {
    let outerFnVar = 8.8;

    function innerFn() {
        console.log(outerFnVar);
    }

    return innerFn;
}

const newFn = outerFn();

newFn();