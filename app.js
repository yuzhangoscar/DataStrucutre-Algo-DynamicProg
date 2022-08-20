function* generator(input) {
    const firstYield = yield `first yield: ${input}`;
    yield `you cannot see this line`;
    const secondYield = yield `second yield is called, first yield is ${firstYield}`;
}

const iterator = generator(1.1);
console.log(iterator.next()); //first yield: 1.1
console.log(iterator.next(1.2)); //you cannot see this line
console.log(iterator.next()); //second yield is called, first yield is 1.2