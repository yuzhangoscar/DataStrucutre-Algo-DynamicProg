console.log([2,25,100,1].sort());
console.log([2,25,100,1].sort((a,b) => a-b));

const objA = [
    {Person: {
        name: 'a',
        salary: 1
    }},
    {Person: {
        name: 'b',
        salary: 2
    }},
    {Person: {
        name: 'c',
        salary: 3
    }}
];

objA.sort((b, a) => {
    console.log(a.Person);
    if (b.Person.name > a.Person.name) return -1;
    else return 1;
});
console.log(objA);