function privateVarStorage() {
    let privateCount = 0;
    this.getCount = function() {
        return privateCount;
    }
    this.setCount = function(input) {
        privateCount = input;
    }
}

const one = new privateVarStorage();
console.log(one.getCount());
one.setCount(1);
console.log(one.getCount());