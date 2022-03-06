// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const a = [1,2,3,4,5,6,7,0,0,0];
const b = [0, 0, 1];

const moveZeroes = (nums) => {
    let newArray = [];
    let numberOfZeroes = 0;

    newArray = nums.filter((element) => element != 0);

    numberOfZeroes = nums.length - newArray.length;

    for(let index = 0; index < numberOfZeroes; index ++) {
        newArray.push(0);
    }
    
    for (let index = 0; index < nums.length; index++) {
        nums[index] = newArray[index];
    }
}

console.log(moveZeroes(b));