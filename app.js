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
    externalModule.print = function() {
        console.log('this is console log');
    }
})(delay);

delay.increase();
delay.print();