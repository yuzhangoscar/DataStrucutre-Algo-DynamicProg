function Ninja() {
    this.swingSword = function() {
        console.log(`swing sword`);
    }
}

const ninjaOne = new Ninja();
ninjaOne.swingSword();
console.log(Ninja.prototype.constructor);
console.log(ninjaOne.__prototype__);