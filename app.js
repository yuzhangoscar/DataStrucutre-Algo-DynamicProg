const delay = (function delay(){
    let count = 8.9;

    return{
        increase: () => {
            count++;
            console.log(count);
        }
    };
})();

(function print(externalModule) {
    let coutn = 8.8;

    externalModule.print = function() {
        console.log(`${coutn}`);
    }
})(delay);

delay.increase();
delay.print();