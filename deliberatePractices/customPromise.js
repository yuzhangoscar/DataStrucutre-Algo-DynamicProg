const obj = {
    one: 1,
    two: 2,
    three: 3,
    fn: function() {
        console.log('nothing');
    }
};

console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
