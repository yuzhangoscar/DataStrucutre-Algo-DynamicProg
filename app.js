function Ninja() {
    this.swung = false;
    Ninja.prototype.swing = function() {
        console.log('swing');
        this.swung = true;
    }
}

const ninjaOne = new Ninja();
console.log(ninjaOne.swung);
ninjaOne.swing();
console.log(ninjaOne.swung);