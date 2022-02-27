/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let firstMatch = 0;
    let secondMatch = 0;
    
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
        let firstNumber = nums[firstIndex];
        let possibleSecondNumber = target - firstNumber;
        
        for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
            if (secondIndex != firstIndex && nums[secondIndex] == possibleSecondNumber) {
                firstMatch = firstIndex;
                secondMatch = secondIndex;
            }
        }
    }
    
    return [firstMatch, secondMatch];
};