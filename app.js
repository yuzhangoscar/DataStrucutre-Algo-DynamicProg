const firstName = 'yuzzhangoscar';
const firstNameArray = Array.from(firstName, element => console.log(`current element is ${element}`));

const jedi = {
    name: 'yoda',
    job: 'jedi',
    age: 100
};

Object.keys(jedi).forEach(function(key)  {
    console.log(`value is ${this[key]}`)}, jedi);

console.log(Array.from(firstName, (v, i) => {
    console.log(`${v} and ${i}`);
}));
