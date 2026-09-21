
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

// Sort an Array (LeetCode 912) - the same merge sort as above, renamed to
// the signature LeetCode asks for. the problem bans the built-in sort and
// wants O(n log n), which is exactly what merge sort delivers on any input.
// worth re-typing from scratch rather than calling mergeSort: the divide and
// combine split is the thing being practised here.
var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums; // same base case - a single element is already sorted
    }
    //find the mid
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);

    // recurse on each half, capturing the returned arrays as before
    left = sortArray(left);
    right = sortArray(right);

    return merge(left, right);
};

// CAREFUL - this is the third thing in this file named merge:
//   1. function merge(left, right)      - at the top
//   2. function merge(left, right)      - this one, an identical copy
//   3. var merge = function(nums1, m, nums2, n) - further down, and a
//      completely different signature
// function declarations hoist, so 2 quietly replaces 1 before a single line
// runs. they are identical, so nothing breaks. but 3 is an ASSIGNMENT, which
// happens when execution reaches it - from that point on, every later call to
// merge() hits the 4-argument version instead.
// so mergeSort and sortArray only work because their test calls sit ABOVE
// that assignment. move any of them below it and the sort silently breaks,
// because merge would receive (left, right) as (nums1, m). rename the
// LeetCode 88 one to something like mergeInPlace to defuse this.
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
console.log(sortArray([5,2,3,1])); // [ 1, 2, 3, 5 ]

// Merge Sorted Array (LeetCode 88), first attempt - returns a new array.
// the problem hands you nums1 sized m + n, where only the first m slots hold
// real values and the last n are zero padding, plus nums2 holding n values.
// both are already sorted, so this is the COMBINE step on its own - no
// dividing needed, the two sorted halves are given to you.
// slicing off the padding first turns it back into the plain merge above.
// this returns the right values, but LeetCode 88 requires nums1 to be
// modified IN PLACE, so a returned array does not satisfy the judge.
// merging1 below is the fix.
var merge = function(nums1, m, nums2, n) {
    let left = nums1.slice(0, m); // the m real values, padding dropped
    let right = nums2.slice(0, n); // the n values that actually matter

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
// BROKEN: num1 and num2 are never declared anywhere in this file - the
// parameters above are numS1 and numS2, with an s. this line throws
// ReferenceError: num1 is not defined, and it is what stops the file part
// way through, so nothing below here ever runs. declare the two arrays
// first, e.g. let num1 = [1,2,3,0,0,0], num2 = [2,5,6];
// with those defined it prints [ 1, 2, 2, 3, 5, 6 ].
console.log(merge(num1,3,num2,3));

// Merge Sorted Array (LeetCode 88), second attempt - in place, which is what
// the problem actually asks for. same two-pointer merge, but instead of
// pushing into a new result it writes straight back into nums1 through a
// third pointer k that tracks the write position.
// overwriting nums1 while reading from it is safe ONLY because left is a
// COPY taken by slice before any writing begins. drop that copy and the
// writes would clobber values that have not been read yet.
// note there is no test call for this one - merging1([1,2,3,0,0,0], 3,
// [2,5,6], 3) leaves nums1 as [ 1, 2, 2, 3, 5, 6 ].
function merging1(nums1, m, nums2, n) {
    let left = nums1.slice(0, m);
    let right = nums2.slice(0, n);

    let i = 0; // read position in left
    let j = 0; // read position in right
    let k = 0; // WRITE position in nums1

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
    // BROKEN: num1 should be numS1 - the same missing s as the call above.
    // as written this throws ReferenceError the moment merging1 is called.
    // the mutation of nums1 IS the answer here, so the cleanest fix is to
    // drop the return entirely, the way LeetCode 88 expects.
    return num1;
}