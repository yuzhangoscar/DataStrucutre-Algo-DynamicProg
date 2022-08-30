const clickCount = function() {
    let count = 0;
    const CountIncrease = () => {
        console.log(++count);
    }

    return {
        start: function() {
            document.addEventListener('click', CountIncrease);
        }
    }
}();

clickCount.start();

(function(module){
    let count = 0;
    const CountIncrease = () => {
        console.log(++count);
    }

    module.clickStart = function() {
        document.addEventListener('wheel', CountIncrease);
    }
}(clickCount));

clickCount.clickStart();
