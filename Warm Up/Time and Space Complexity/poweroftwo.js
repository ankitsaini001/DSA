// LeetCode 231 - Power of Two
// Given an integer n, return true if it is a power of two (1, 2, 4, 8, 16, ...)

// a power of two only ever has ONE bit set (1, 10, 100, 1000, ...), so
// repeatedly dividing by 2 should eventually strip it down to exactly 1 -
// if it doesn't (an odd remainder shows up before reaching 1), it wasn't
// a power of two to begin with
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false; // 0 and negatives are never powers of two
    }
    while (n % 2 === 0) {
        n = n / 2; // keep halving while it's evenly divisible
    }
    return n === 1; // if we land exactly on 1, every factor was a 2
};
console.log(isPowerOfTwo(1));  // true  (2^0)
console.log(isPowerOfTwo(16)); // true  (2^4)
console.log(isPowerOfTwo(3));  // false (3 isn't a power of two)
