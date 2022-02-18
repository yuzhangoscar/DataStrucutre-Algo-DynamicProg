/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    let pivotIndex = -1;
    const reducer = (accumulatedSum, currentItem) => accumulatedSum + currentItem;
    
    for (let outerIndex = 0; outerIndex < nums.length; outerIndex++) {
      console.log(`left sum is: ${nums.slice(0, outerIndex).reduce(reducer,0)}`);
      console.log(`right sum is: ${nums.slice(outerIndex+1, nums.length).reduce(reducer,0)}`);
        if (nums.slice(0, outerIndex).reduce(reducer,0) == nums.slice(outerIndex+1, nums.length).reduce(reducer, 0) && pivotIndex==-1) {
          console.log(`true, outerIndex is ${outerIndex}`);
            pivotIndex = outerIndex;
        }
    }
    
    return pivotIndex;
};

console.log(pivotIndex([1,1,1,1,1]));