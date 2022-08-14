var globalVar = 'global var';
for (let index = 0; index < 10; index++) {
    let letVar = 'letVar';
    const constVar = 'constVar';
}
console.log(`can see ${globalVar}, but cannot see ${letVar} or ${constVar}`);
