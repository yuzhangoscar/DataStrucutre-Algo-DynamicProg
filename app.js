const set = new Set([1,2,3,4,5,6,-1,-2,-3,-4]);

console.log(set.has(1));
console.log(set);
set.forEach((key, value) => {
    console.log(`key is: ${key}, value is ${value}`);
});
set.add({'a':1});
console.log(set);