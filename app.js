const elements = {
    length: 0,
    add: function(element) {
        Array.prototype.push.call(this, element);
    },
    find: function(callback) {
        return Array.prototype.find.call(this, callback);
    }
}

console.log(elements);
elements.add(`ninjaOne`);
console.log(elements);
elements.add(`ninjaTwo`);
console.log(elements);
console.log(elements.find(element => element==='ninjaOne'));
