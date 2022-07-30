const a  = 'global';

function printA() {
    console.log(this.a);
}

printA();

const objectB = {
    a:'within objectB',
    func: function() {console.log(this.a)}
}

objectB.func();

setTimeout(objectB.func, 1000);

const objectC = {
    a:'within objectC',
    thisArrowFunction: null,
    func:function(){
        this.thisArrowFunction = () => console.log(this.a)
    }
}

objectC.func();
objectC.thisArrowFunction();
