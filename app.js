const newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>console.log(1), 1000);
});

newPromise.then(result => console.log(result));