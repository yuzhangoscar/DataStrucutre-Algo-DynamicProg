const module = function() {
    let count = 0;

    return {
        getCount: ()=>{return count}
    }
}();

console.log(module.getCount());
console.log(module.count);

(function(externalModule){
    externalModule.print = () => {
        console.log(`print me`);
    }
}(module));

module.print();