const searchInsert = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    
    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex)/2);

        if(nums[middleIndex] < target) {
            startIndex = middleIndex + 1;
        }
        else if (nums[middleIndex] > target) {
            endIndex = middleIndex - 1;
        }
        else {
            return middleIndex;
        }
    }

    return startIndex;
};

const a = [1,3,5,6];
console.log(searchInsert(a,7));