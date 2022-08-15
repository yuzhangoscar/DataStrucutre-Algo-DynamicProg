function* IDGenerator(firstID) {
    let newID = yield `this is ${firstID}`;
    let secondNewID = yield `this is an intermediate message that carried the newID value ${newID}`;
    yield secondNewID;
    yield `this is an intermedidate message that carried the secondNewID value ${secondNewID}`;
}

const iterator = IDGenerator('007');
console.log(iterator.next().value); //this is 007
console.log(iterator.next('008').value); //this is an intermediate message that carried the newID value 008
console.log(iterator.next('009').value); //009
console.log(iterator.next('009').value); //this is an intermediate message that carried the secondNEW ID value 009