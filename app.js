import {timedPromise} from './support.js';

class MyClass {
    name = 'yz';

    set Name(value) {
        this.name = value;
    }

    get Name() {
        return this.name;
    }
}

const newClass = new MyClass();

console.log(newClass.Name);
newClass.Name = 'zzz';
console.log(newClass.Name);
timedPromise(1000).then((result) => console.log(result));
