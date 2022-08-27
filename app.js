class Person {
    name = null;
    age = null;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    set Name(value) {
        this.name = value;
    }
    get Name() {
        return this.name;
    }

    static whoami() {
        return this.name + this.age;
    }
}

class Ninja extends Person {
    constructor(n, a){
        super(n, a);
    }
}

const ninjaOne = new Ninja(`a`, 9);
ninjaOne.Name = `aa`;
console.log(ninjaOne.name);
console.log(Ninja.whoami());