// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// this solution is taking too long
// const twoSum = (numbers, target) => {
//     for (let index = 0; index < numbers.length; index++) {
//         let potentialSecondNumber = target - numbers[index];
//         let potentialSecondNumberIndex = numbers.indexOf(potentialSecondNumber, index+1);
//         console.log(`index is ${index}, potentialSecondNumber is ${potentialSecondNumber}, potentialSecondNumberIndex is ${potentialSecondNumberIndex}`);
//         if(potentialSecondNumberIndex > 0) {
//             return [index + 1, potentialSecondNumberIndex + 1];
//         }
//     }
// };

const twoSum = (numbers, target) => {
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    let loop = true;

    while(loop) {
        let sum = numbers[startIndex] + numbers[endIndex];
        if ( sum > target) {
            endIndex--;
            console.log(`endIndex is: ${endIndex}`);
        }
        else if (sum < target) {
            startIndex++;
            console.log(`startIndex is : ${startIndex}`);
        }

        else loop = false;
    }

    return [startIndex + 1, endIndex + 1];
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([2,3,4], 6));
// console.log(twoSum([-1,0], -1));
console.log(twoSum([5, 25, 75], 100));