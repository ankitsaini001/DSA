// Arrays - dedicated topic (basics were mixed into loops/loops.js earlier)

// create an array and traverse it
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([10, 20, 30, 40]);

// Q1. Sum of array elements

// Write a function sumArray(arr) that returns the sum of all elements.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Q2. Reverse an array (without using .reverse())

// Write a function reverseArray(arr) that returns a new reversed array.

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5,4,3,2,1]

// Q3. Linear search

// Write a function linearSearch(arr, target) that returns the index of target
// or -1 if it's not found.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 8, 1, 9], 8)); // 2
console.log(linearSearch([5, 3, 8, 1, 9], 100)); // -1

// Q4. Find duplicates in an array

// Write a function findDuplicates(arr) that returns all values that appear
// more than once.

function findDuplicates(arr) {
    let seen = [];
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen.push(arr[i]);
        }
    }
    return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 1])); // [2,1]

// corner case: empty array
console.log(sumArray([])); // 0
console.log(linearSearch([], 5)); // -1
