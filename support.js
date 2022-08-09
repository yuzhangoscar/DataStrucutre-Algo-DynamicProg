const timedPromise = delay => new Promise((resolve, reject) => setTimeout(() => resolve('resolved'), delay));
setTimeout(() => console.log('5 seconds'), 5000);

export {timedPromise}
