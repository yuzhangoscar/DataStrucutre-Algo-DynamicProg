function* IDGenerator(firstID) {
    let newID = yield firstID;
    yield `newID is ${newID}`;
    let secondID = yield newID;
    yield `secondID is ${secondID}`;
}

const IDIterator = IDGenerator('007');
console.log(IDIterator.next('008').value); //007
console.log(IDIterator.next('009').value); //newID is 008
console.log(IDIterator.next('009').value); //008
console.log(IDIterator.next().value); //secondID is 009