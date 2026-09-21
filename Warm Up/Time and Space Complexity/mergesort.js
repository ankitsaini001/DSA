
// what does mergeSort(left) return, and why do we assign that returned value back to left?
// mergeSort() divides an array recursively and returns a sorted version of each half. The returned sorted halves are then passed to merge(), which combines them into one sorted array.

// MERGE SORT - divide and conquer, in two halves of the idea:
//   DIVIDE (this function): keep splitting the array down the middle until
//     every piece is a single element, which is sorted by definition.
//   COMBINE (merge below): walk back up, merging each pair of sorted pieces.
// splitting gives log n levels, and each level merges n items in total, so
// the cost is O(n log n) - and unlike quicksort that holds for EVERY input,
// there is no bad-pivot worst case here.
function mergeSort(arr) { 
    if (arr.length <= 1) { 
        return arr; // base case: 0 or 1 element is already sorted - stops the recursion
    }

    // find mid
    let mid = Math.floor(arr.length / 2);

    // slice() COPIES, it does not view - so this version sorts out of place
    // and allocates fresh arrays at every level, costing O(n) extra memory
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // sort both half
    // the reassignment is the part worth remembering: mergeSort RETURNS a new
    // sorted array instead of sorting its argument in place, so the return
    // value has to be captured. calling mergeSort(left) and throwing the
    // result away would leave left exactly as unsorted as it started.
    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right); // both halves are sorted now - glue them together
}

// the COMBINE half of merge sort. its precondition is that both inputs are
// ALREADY sorted - the recursion above is what guarantees that. merging two
// sorted lists is the cheap part: one pass, O(n + m), no searching.
function merge(left, right) { 
    let result = [];

    // one pointer per half, both starting at the front
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) { 
        //One small improvement: use <= instead of < when comparing:This makes the merge stable when duplicate values exist.
        // why that works: on a tie, `<=` takes from LEFT first, and left holds
        // the elements that came earlier in the original array, so equal items
        // keep their original order. invisible for plain numbers, but it is
        // what lets you sort objects by one key without scrambling the rest.
        // and because both halves are sorted, the smaller of the two heads is
        // always the smallest item left anywhere - so one comparison suffices.
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else { 
            result.push(right[j]);
            j++;
        }
    }

    // merge remaining left elements
    // the loop above quits the moment EITHER half empties, so one half still
    // has values in it. whatever is left over is already sorted and already
    // bigger than everything pushed so far, so it just gets appended as is -
    // no comparing needed. exactly one of these two loops ever runs.
    while (i < left.length) { 
        result.push(left[i]);
        i++;
    }
    while (j < right.length) { 
        result.push(right[j]);
        j++;
    }
    return result; // a NEW array - the caller has to assign it, see mergeSort
}
console.log(mergeSort([7,2,9,1])); // [ 1, 2, 7, 9 ]
console.log(mergeSort([5, 2, 8, 2, 1, 9])); // [ 1, 2, 2, 5, 8, 9 ] - keeps both 2s

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