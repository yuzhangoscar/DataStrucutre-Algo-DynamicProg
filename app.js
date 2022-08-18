const newPromise = new Promise((resolve, reject) => {
    //resolve(9.9);
    reject(8.8);
})

newPromise.then(
    (result) => console.log(result)
).catch((reason)=>console.log(reason));