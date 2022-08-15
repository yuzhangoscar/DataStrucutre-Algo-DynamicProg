function* idGenerator() {
    let id = 1;
    while(true) {
        yield id++;
    }
}
const ids = idGenerator();

let firstID = ids.next();
let sectondID = ids.next();
let thirdID = ids.next();
console.log(firstID, sectondID, thirdID);