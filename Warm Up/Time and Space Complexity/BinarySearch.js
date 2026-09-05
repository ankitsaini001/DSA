// Binary search
// Input: nums = [1,3,5,6], target = 5
let num = [1, 3, 5, 6];
function binarySearch(num, target) { 
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
    return -1;
}

console.log(binarySearch(num, 5));

// second question
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
    return left;

}
console.log(binarySearchTarget2(num, 2));

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
console.log(binarySearchTarget7(num, 7));

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
console.log(search(nums, 9));
console.log(search(nums, 2));