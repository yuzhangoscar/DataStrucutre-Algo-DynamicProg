// const simplePlan = `
// .................
// ..#...........#..
// ..#.........=.#..
// `;

// let rows = simplePlan.trim().split('\n').map(l=>[...l]);

// console.log(rows);

// console.log(Object.prototype.toString.call(rows));

// const trivialArray = [1,2,3];
// console.log(trivialArray.length);
// trivialArray['salary'] = 9;
// console.log(trivialArray['salary']);
// console.log(trivialArray.length);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(9.88), 1000);
});

myPromise.then(result => console.log(result));

const timedPromise = function(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(7.7), delay)
    })
}

timedPromise(3000).then(result => console.log(result));

const timedPromiseInArrowFn = delay => new Promise(resolve => {setTimeout(() => resolve(6.67), delay)});

timedPromiseInArrowFn(7000).then(result => console.log(result));