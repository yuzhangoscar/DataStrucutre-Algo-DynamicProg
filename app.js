const module = function() {
    let privateCount = 0;
    return {
        externalFn: () => {
            return privateCount;
        }
    };
}();

console.log(module.externalFn());
console.log(module.privateCount);