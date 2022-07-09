let promiseOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(`promiseOne is rejected.`), 1000);
    });
}

let log = (data) => console.log(data);

promiseOne()
    .then(() => console.log('resolved'))
    .catch(() => console.log('rejected'))
    .then(() => console.log(`resolved from rejected`));
