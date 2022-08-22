const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([1,2,3,4,false], (element)=>element!==0));