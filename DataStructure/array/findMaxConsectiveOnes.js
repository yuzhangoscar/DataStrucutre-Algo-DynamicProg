const a = [1,2,3,4,5];
const b = [1,1,1,1,1];
const c = [1,2,3,4,1];

const findMax = (nums) => {
    let onesCount = 0;
    let maxOnesCount = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 1) {
            onesCount++;
        }
        else {
            if (onesCount > maxOnesCount) {
                maxOnesCount = onesCount;
            }
            onesCount = 0;
        }
    }
    return (onesCount > maxOnesCount ? onesCount : maxOnesCount);
}

console.log(findMax(a));
console.log(findMax(b));
console.log(findMax(c));