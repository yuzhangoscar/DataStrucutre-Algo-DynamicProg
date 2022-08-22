const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual([2,2,2,2]));
console.log(allEqual([2,2,2,2,3]));