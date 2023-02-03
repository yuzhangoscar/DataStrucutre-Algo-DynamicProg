const UTIL = {
    delay: function(timeOut) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, timeOut);
        });
    },
    get: function(url) {
        return new Promise((resolve, reject) => {
            resolve('I fetched some URL');
        });
    }
}

UTIL.delay(2000).then((resolve)=>{
    console.log(resolve);
    return UTIL.delay(2000);
}).then(() => {
    let url = 'https://www.google.com'
    return UTIL.get(url);
}).then(response => {
    console.log(response);
});

