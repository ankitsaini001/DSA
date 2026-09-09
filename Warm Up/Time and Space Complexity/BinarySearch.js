// Binary search
// Input: nums = [1,3,5,6], target = 5
// works only on a SORTED array - each step halves the search space (see
// TimeSpaceComplexity/timespace.js for why that gives O(log n))
let num = [1, 3, 5, 6];
function binarySearch(num, target) {
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (num[mid] == target) {
            return mid; // found it
        } else if (num[mid] < target) {
            left = mid + 1; // target is in the right half, discard the left half
        } else {
            right = mid - 1; // target is in the left half, discard the right half
        }
    }
    return -1; // left > right -> target isn't in the array
}

console.log(binarySearch(num, 5)); // 2

// second question
// same binary search, but instead of -1 for a miss, return the INSERTION
// POINT - the index where target would slot in to keep the array sorted.
// target = 2 isn't in [1,3,5,6], so it should be inserted at index 1
function binarySearchTarget2(num, target) {
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (num[mid] == target) {
            return mid;
        } else if (num[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left; // when the loop ends, left is exactly the insertion point

}
console.log(binarySearchTarget2(num, 2)); // 1

// same insertion-point idea, but target is bigger than every element -
// left should end up walking all the way past the last index
function binarySearchTarget7(num, target) {
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (num[mid] == target) {
            return mid;
        } else if (num[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
console.log(binarySearchTarget7(num, 7)); // 4 -> insert after the last element

// LeetCode 704 - Binary Search
//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

let nums = [-1, 0, 3, 5, 9, 12];
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
};
console.log(search(nums, 9)); // 4 (found)
console.log(search(nums, 2)); // -1 (not present)

// LeetCode 278 - First Bad Version
// isBadVersion(n) is a monotonic check: once a version is bad, every
// version after it is bad too (good...good, bad, bad...bad). binary search
// on that boolean instead of on array values, to find the FIRST true.
function isBadVersionCheck(version) {
    return version >= 4; // pretend versions 4 and up are "bad" (for testing)
}

function solution(isBadVersion, n) {
    let left = 0;
    let right = n;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (isBadVersion(mid)) {
            right = mid; // mid could BE the first bad one, keep it in range
        } else {
            left = mid + 1; // mid is good, first bad one is strictly after it
        }
    }
    return left; // left === right -> the first bad version
}
console.log(solution(isBadVersionCheck, 5)); // 4

// Find First and Last Position of Element (LeetCode 34)
// the array can have DUPLICATES of the target, e.g. the two 7s and two 8s
// below - a normal binary search would stop at whichever copy it hits
// first, so we need two separate searches that keep going past a match
// instead of stopping there.
//nums = [5,7,7,8,8,10], target = 8
//nums = [5,7,7,8,8,10], target = 6

// found a match? remember it, then keep searching the LEFT half for an
// earlier one (there might be another target right before it)
function leftMostSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            result = mid;
            right = mid - 1; // don't stop - a duplicate could be further left
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// same idea, mirrored: found a match? keep searching the RIGHT half for a
// later one, instead of stopping
function rightMostSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            result = mid;
            left = mid + 1; // don't stop - a duplicate could be further right
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// combine both -> [firstIndex, lastIndex], or [-1, -1] if not found
var searchBinary = function (nums, target) {
    let left = leftMostSearch(nums, target);
    let right = rightMostSearch(nums, target);

    return [left, right];
}
console.log(searchBinary([5, 7, 7, 8, 8, 10], 8)); // [3, 4] - both 8s
console.log(searchBinary([5, 7, 7, 8, 8, 10], 6)); // [-1, -1] - not present

// LeetCode 35 - Search Insert Position
// exactly the same insertion-point trick as binarySearchTarget2/7 above,
// written as the formal LeetCode-style solution
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }
    return left;
}
console.log(searchInsert([1, 3, 5, 6], 5)); // 2 - found
console.log(searchInsert([1, 3, 5, 6], 2)); // 1 - insert between 1 and 3
console.log(searchInsert([1, 3, 5, 6], 7)); // 4 - insert at the end


function findRightmost(nums, target) { 
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            result = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }
    return result;

}

function findLeftmost(nums, target) { 
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            result = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }
    return result;
}

var search = function (nums, target) { 
    let leftSearch = findLeftmost(nums, target);
    let rightSearch = findRightmost(nums, target);
    return [leftSearch, rightSearch];
}
console.log(search([5,7,7,8,8,10], 8));

function rotatedArray(nums) { 
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else { 
            right = mid;
        }
    }
    return nums[left];
}
console.log(rotatedArray([4, 5, 6, 7, 0, 1, 2]));
console.log(rotatedArray([3,4,5,1,2]));

function searchSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {  // fix 1: <= not 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;  // fix 2: return immediately, don't just record
        }
        else if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target < nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
console.log(searchSortedArray([4,5,6,7,0,1,2],0));