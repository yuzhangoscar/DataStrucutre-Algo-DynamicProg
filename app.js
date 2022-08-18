const newPromise = new Promise((resolve, reject) => {
    resolve(9.9);
})

newPromise.then((result) => console.log(result));