// Sorting algorithms - basics

// Q1. Bubble sort

// Write a function bubbleSort(arr) that sorts the array in ascending order
// by repeatedly swapping adjacent elements that are in the wrong order.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
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

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([5, 3, 8, 1, 9, 2])); // [1,2,3,5,8,9]

// corner cases: empty array and already sorted array
console.log(bubbleSort([])); // []
console.log(selectionSort([1, 2, 3])); // [1,2,3]
