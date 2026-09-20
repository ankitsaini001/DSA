
// what does mergeSort(left) return, and why do we assign that returned value back to left?
// mergeSort() divides an array recursively and returns a sorted version of each half. The returned sorted halves are then passed to merge(), which combines them into one sorted array.

// merge sort array
function mergeSort(arr) { 
    if (arr.length <= 1) { 
        return arr;
    }

    // find mid
    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // sort both half
    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) { 
    let result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) { 
        //One small improvement: use <= instead of < when comparing:This makes the merge stable when duplicate values exist.
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else { 
            result.push(right[j]);
            j++;
        }
    }

    // merge remaining left elements
    while (i < left.length) { 
        result.push(left[i]);
        i++;
    }
    while (j < right.length) { 
        result.push(right[j]);
        j++;
    }
    return result;
}
console.log(mergeSort([7,2,9,1]));
console.log(mergeSort([5, 2, 8, 2, 1, 9]));

// leetcode: 912
var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    //find the mid
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);

    left = sortArray(left);
    right = sortArray(right);

    return merge(left, right);
};

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
console.log(sortArray([5,2,3,1]));

// merge array where we are returning result
var merge = function(nums1, m, nums2, n) {
    let left = nums1.slice(0, m);
    let right = nums2.slice(0, n);

    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
};
console.log(merge(num1,3,num2,3));

// leetcode 88
function merging1(nums1, m, nums2, n) {
    let left = nums1.slice(0, m);
    let right = nums2.slice(0, n);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            nums1[k] = left[i];
            i++;
            k++;
        } else { 
            nums1[k] = right[j];
            j++;
            k++;
        }
    }
    while (i < left.length) {
        nums1[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        nums1[k] = right[j];
        j++;
        k++;
    }
    return num1;
}