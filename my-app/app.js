let firstPromise = function() {
    return new Promise((resolve, reject) => {
        resolve('firstPromise has been resolved.');
    })
}

let secondPromise = function(data) {
    return new Promise((resolve, reject) => {
        resolve(`secondPromise has been resolved with ${data}`);
    })
}

let consumer = function(data) {
    console.log(`received data is ${data}`);
}

firstPromise().then(secondPromise).then(consumer);
