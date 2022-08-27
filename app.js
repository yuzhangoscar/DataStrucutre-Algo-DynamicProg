const obj = {
    name: null,
    set Name(value) {this.name = value},
    get Name() {return this.name}
}

obj.Name = 'joe';
console.log(obj.Name);