/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
    const largestNumber = Math.max(...nums);
    let largestNumberIndex = nums.indexOf(largestNumber);
    
    for (let outerIndex = 0; outerIndex < nums.length; outerIndex++) {
        if (largestNumber / nums[outerIndex] < 2 && outerIndex!=largestNumberIndex) {
            console.log(`exception: ${nums[outerIndex]}`);
            largestNumberIndex = -1;
        }
    }
    
    return largestNumberIndex;
};

dominantIndex([3,6,1,0]);