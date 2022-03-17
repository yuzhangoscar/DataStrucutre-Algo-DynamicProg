// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1

const isPowerOfTwo = (n) => {
    if (n >=0 && n % 2 == 0 || n==1) {
        if (Number.isInteger(Math.log2(n))) {
            return true;
        }
        return false;
    }
    else return false;
};

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(-2));