function Ninja() {
    this.swing = 9,9
}

const ninjaOne = new Ninja();

Ninja.prototype.swingSword = function() {
    console.log('ninja swings a sword.');
};

const ninjaTwo = new ninjaOne.constructor();

console.log(ninjaTwo);
console.log(ninjaTwo.swing);
