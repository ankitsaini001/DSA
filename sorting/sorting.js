// Sorting algorithms - basics

// Q1. Bubble sort

// Write a function bubbleSort(arr) that sorts the array in ascending order
// by repeatedly swapping adjacent elements that are in the wrong order.

// after pass i the largest i elements have already bubbled to the end, so
// the inner loop can stop at n - 1 - i instead of going all the way
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap the two neighbours using a temp holder
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 9, 2])); // [1,2,3,5,8,9]

// Q2. Selection sort

// Write a function selectionSort(arr) that sorts the array by repeatedly
// picking the minimum element from the unsorted part and placing it at
// the beginning.

// find the smallest value in the unsorted part, then put it at position i -
// one swap per pass instead of bubble sort's many
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) { // skip the swap if i already holds the minimum
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([5, 3, 8, 1, 9, 2])); // [1,2,3,5,8,9]

// corner cases: empty array (loops never run) and an already sorted array
// (no comparison ever triggers a swap). both sorts change the array in
// place, so the input array is modified, not copied.
console.log(bubbleSort([])); // []
console.log(selectionSort([1, 2, 3])); // [1,2,3]
