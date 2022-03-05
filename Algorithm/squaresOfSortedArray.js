/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaredArray = nums.map(x => x*x);
    return squaredArray.sort((a,b) => a-b);
};