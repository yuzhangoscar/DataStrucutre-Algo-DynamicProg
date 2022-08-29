const elems = {
    length:0
};

console.log(elems);
Array.prototype.push.call(elems, 1);
console.log(elems);
Array.prototype.push.call(elems, 2);
console.log(elems);