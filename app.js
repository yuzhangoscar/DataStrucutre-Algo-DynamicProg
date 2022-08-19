const newPromise = new Promise((resolve, reject) => {
    //resolve(1);
    reject(2);
});

newPromise.then((success)=>console.log(success), (failure)=>console.log(failure));