class Person {
    name = null;
    age = null;

    constructor(n, a){
        this.name = n;
        this.age = a;
    };

    set Name(value) {
        this.name = value;
    }
    get Name() {
        return this.name;
    }
}

class Ninja extends Person {
    weapon = null;

    constructor(n, a, w) {
        super(n, a);
        this.weapon = w;
    }

    get Weapon() {
        return this.weapon + this.name + this.age;
    }
}

const ninjaOne = new Ninja(`john`, 1, `sword`);
console.log(ninjaOne.Weapon);