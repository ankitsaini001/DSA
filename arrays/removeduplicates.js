// Remove duplicates from a sorted array
// First, the setup: what "sorted" actually means, because the exact wording
// of the problem decides whether duplicates are even allowed in the input.

// 1. Sorted in INCREASING order (strictly increasing)
// [1, 2, 4, 8, 12]
// every element is bigger than the one before it -> no duplicates possible
//      a[i + 1] > a[i]

function isIncreasing(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (!(a[i + 1] > a[i])) {
            return false;
        }
    }
    return true;
}
console.log(isIncreasing([1, 2, 4, 8, 12])); // true
console.log(isIncreasing([1, 2, 2, 8])); // false -> 2 repeats, not strictly increasing

// 2. Sorted in DECREASING order (strictly decreasing)
// [12, 9, 8, 7, 5, 1]
// same idea, just walking downwards - again no duplicates possible
//      a[i + 1] < a[i]

function isDecreasing(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (!(a[i + 1] < a[i])) {
            return false;
        }
    }
    return true;
}
console.log(isDecreasing([12, 9, 8, 7, 5, 1])); // true
console.log(isDecreasing([12, 9, 9, 5])); // false

// 3. Sorted, NON-DECREASING
// [1, 2, 3, 3, 3, 4, 4, 5, 8, 9]
// the next element is allowed to be EQUAL to the current one, so the array is
// still sorted but duplicates ARE allowed - this is the case the
// remove-duplicates problem is about
//      a[i + 1] >= a[i]

function isNonDecreasing(a) {
    for (let i = 0; i < a.length - 1; i++) {
        if (!(a[i + 1] >= a[i])) {
            return false;
        }
    }
    return true;
}
console.log(isNonDecreasing([1, 2, 3, 3, 3, 4, 4, 5, 8, 9])); // true
console.log(isNonDecreasing([1, 2, 3, 2])); // false -> 2 < 3, order breaks

// Takeaway
// > and < mean strictly sorted (duplicates impossible).
// >= and <= mean non-decreasing / non-increasing (duplicates possible).
// Because the input here is sorted non-decreasing, all copies of a value sit
// NEXT TO each other - so a duplicate can be spotted just by comparing
// neighbours, no extra lookup structure needed.

// LeetCode 26 - Remove Duplicates from Sorted Array
// Given a sorted (non-decreasing) array nums, remove the duplicates IN-PLACE
// so each unique value appears once, keeping the order. Return k = the count
// of unique values. The first k slots of nums must hold those unique values;
// whatever sits after index k-1 doesn't matter.

// Idea: two pointers walking the same array
//   i = the reader - visits every element, one by one
//   x = the writer - index of the LAST unique value already placed
// Because the array is sorted, equal values are adjacent, so a value is new
// exactly when it is BIGGER than the last one we kept:  a[i] > a[x]
// When that happens: move the writer forward one slot and copy the new value
// into it. Otherwise it's a duplicate - just skip it, i keeps moving.

function removeDuplicates(a) {
    let n = a.length;
    let x = 0; // a[0] is always unique, so the writer starts parked on it

    for (let i = 0; i < n; i++) {
        if (a[i] > a[x]) { // new value, not a repeat of a[x]
            x = x + 1; // make room
            a[x] = a[i]; // overwrite the duplicate sitting there
        }
        // else -> a[i] == a[x], a duplicate, skip it
    }
    return x + 1; // x is an INDEX, the count is one more than that
}

// Walkthrough of the board example: a = [0,0,1,1,1,2,2,3,3,4]
// i=0  a[0]=0 > a[0]=0 ?  no  -> skip
// i=1  a[1]=0 > a[0]=0 ?  no  -> skip (duplicate 0)
// i=2  a[2]=1 > a[0]=0 ?  yes -> x=1, a[1]=1  [0,1,1,1,1,2,2,3,3,4]
// i=3  a[3]=1 > a[1]=1 ?  no  -> skip
// i=4  a[4]=1 > a[1]=1 ?  no  -> skip
// i=5  a[5]=2 > a[1]=1 ?  yes -> x=2, a[2]=2  [0,1,2,1,1,2,2,3,3,4]
// i=6  a[6]=2 > a[2]=2 ?  no  -> skip
// i=7  a[7]=3 > a[2]=2 ?  yes -> x=3, a[3]=3  [0,1,2,3,1,2,2,3,3,4]
// i=8  a[8]=3 > a[3]=3 ?  no  -> skip
// i=9  a[9]=4 > a[3]=3 ?  yes -> x=4, a[4]=4  [0,1,2,3,4,2,2,3,3,4]
// loop ends, x=4 -> return 5
// the tail [2,2,3,3,4] is leftover junk - the problem says to ignore it

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // 5
console.log(nums); // [0,1,2,3,4, 2,2,3,3,4] -> only the first 5 matter
console.log(nums.slice(0, 5)); // [0,1,2,3,4]

let nums2 = [1, 1, 2];
console.log(removeDuplicates(nums2), nums2.slice(0, 2)); // 2 [1,2]

// why a[i] > a[x] and not a[i] !== a[x]
// on a sorted array both work - a[i] can never be SMALLER than a[x], so
// "not equal" and "greater than" mean the same thing here. On an unsorted
// array neither works, the whole trick depends on duplicates being adjacent.

// corner case: empty array
// this version returns 1 for [] because x starts at 0 and the loop never runs.
// LeetCode guarantees n >= 1 so it passes there, but guard it if the input
// might be empty:  if (a.length === 0) return 0;

// complexity
// time  O(n) - i makes a single pass over the array
// space O(1) - everything is overwritten in place, no second array


// remove duplicate from non-decreasing array of num
var findDuplicate = function (nums) { 
    let x = 0;
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] > nums[x]) { 
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}
console.log(findDuplicate([0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,6,7,8,9,9,9]));

function findDuplicateValue(nums) { 
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) { 
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}
console.log(findDuplicateValue([0,0,1,1,1,2,2,3,3,4]));