function sum() {
    this.result = 0;
    for (let value of arguments) {
        this.result += value;
    }
}

const ninjaOne = {};
const ninjaTwo = {};

sum.apply(ninjaOne, [1,2,3,4]);
console.log(ninjaOne.result);
sum.apply(ninjaTwo, [1,2,3,4,5]);
console.log(ninjaTwo.result);