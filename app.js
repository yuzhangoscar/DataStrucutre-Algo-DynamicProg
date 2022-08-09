function Ninja() {

}

const ninjaOne = new Ninja();

Ninja.prototype.swingSword = function() {
    console.log('ninja swings a sword.');
};

ninjaOne.swingSword();
