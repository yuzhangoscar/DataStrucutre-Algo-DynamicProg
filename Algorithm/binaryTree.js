const a = [1,2,3,4,5,7,8,9,10,11,12];
const b = [1,2,3,4,5,6];
const c = [1];

const search = (nums, key) => {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if (nums[middleIndex] > key) {
            rightIndex = middleIndex - 1;
        }

        else if (nums[middleIndex] < key) {
            leftIndex = middleIndex +1;
        }

        else {
            return middleIndex;
        }
    }

    return `not found`;
};

console.log(search(a, 3));
console.log(search(a, 11));
console.log(search(a, -3));
console.log(search(c, 1));