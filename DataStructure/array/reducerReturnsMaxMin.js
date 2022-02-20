a = [1,23,4,5,8,9];

const max = a.reduce((finalValue, currentItem) => {
    if (finalValue > currentItem) {
        return finalValue;
    }
    else return currentItem;
}, a[0]);

const min = a.reduce((finalValue, currentItem) => {
    return (finalValue < currentItem) ? finalValue:currentItem;
}, a[0]);

console.log(max);
console.log(min);