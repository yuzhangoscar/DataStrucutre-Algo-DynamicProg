const a = [1,2,3,4,5,6,7];
const b = [1,2];

const rotate = (nums, k) => {
    const rotatedArray = [];
    const numsLength = nums.length;

    for (let index = 0; index < numsLength; index++) {
        let newIndex = (index + k)%numsLength;
        console.log(`for old index ${index}, its new index is ${newIndex}`);
        rotatedArray[newIndex] = nums[index];
    }

    nums = [...rotatedArray];
    return nums;
};

console.log(rotate(a, 3));
console.log(rotate(b, 3));