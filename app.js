const obj = {
    name: null,
    set Name(value) {
        this.name = value;
    },
    get Name() {
        return this.name;
    }
}

console.log(obj.Name);
obj.Name='y';
console.log(obj.Name);