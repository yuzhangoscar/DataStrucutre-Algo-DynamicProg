function Ninja() {

}

const ninjaOne = new Ninja();

Ninja.prototype.swingSword = function() {
    console.log('ninja swings a sword.');
};

Ninja.prototype = {
    pierce: function() {
        console.log('Ninja pierces.');
    }
}

const ninjaTwo = new Ninja();

ninjaOne.swingSword();
//ninjaTwo.swingSword();
//ninjaOne.pierce();
ninjaTwo.pierce();
console.log(ninjaOne.constructor);
