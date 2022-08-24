function Ninja() {
}
const ninjaOne = new Ninja();
Ninja.prototype.swing = function() {
    console.log(`swing`);
}
ninjaOne.swing(); //swing
Ninja.prototype = {
    pierce: function(){console.log(`pierce`);}
}
const ninjaTwo = new Ninja();
ninjaOne.swing(); //swing
ninjaTwo.swing(); //TypeError, not a function
ninjaOne.pierce(); //TypeError, not a function
ninjaTwo.pierce(); //pierce