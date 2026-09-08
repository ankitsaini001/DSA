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
