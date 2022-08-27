class Person {
    name = null;
    age = 0;

    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greeting() {
        console.log(`greeting.`);
    }
    set setAge(value) {
        this.age = value;
    }
    get getAge() {
        return this.age;
    }
}

const personOne = new Person(`joe`, 1);
personOne.setAge = 2;
console.log(personOne.getAge);