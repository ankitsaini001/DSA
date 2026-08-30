// Time & Space Complexity - notes
// Example used: Linear Search vs Binary Search

// ===================== LINEAR SEARCH =====================

// works on ANY array - sorted or unsorted
// checks elements one by one, from start to end

// arr = [2, 1, 3, 5, 4, 7]
// search(5) -> in the worst case we may have to check every single element
// before finding it (or reaching the end if it's not present)

// number of steps (x) is directly proportional to n (size of the array):
// n = 10   -> x = 10
// n = 100  -> x = 100
// n = 1000 -> x = 1000
// { n times }

// Time Complexity = O(n) -> "linear time" - work grows in direct proportion to n

function linearSearch(arr, target) {
    let steps = 0;
    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) {
            return { index: i, steps: steps };
        }
    }
    return { index: -1, steps: steps };
}

console.log(linearSearch([2, 1, 3, 5, 4, 7], 5));


// ===================== BINARY SEARCH =====================

// only works on a SORTED array
// arr = [1, 3, 4, 7, 9, 10, 15]
// search(15)

// each comparison eliminates HALF of the remaining elements
// question: how many times can n be halved before it becomes 1?
// answer:
//      x = log2(n)

// n = 10   -> x = log2(10)   ~ 3    (2^3  = 8, close to 10)
// n = 100  -> x = log2(100)  ~ 7    (2^7  = 128, comfortably covers 100)
// n = 1000 -> x = log2(1000) ~ 10   (2^10 = 1024, close to 1000)

// Time Complexity = O(log n) -> "logarithmic time"
// grows MUCH slower than O(n) as n increases:
//   n: 100 -> 1000  (10x the data)
//   x: 7   -> 10    (barely any extra work)

function binarySearch(arr, target) {
    let steps = 0;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        steps++;
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return { index: mid, steps: steps };
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return { index: -1, steps: steps };
}

console.log(binarySearch([1, 3, 4, 7, 9, 10, 15], 15));


// ===================== BIG O NOTATION: BEST CASE vs WORST CASE =====================

// Big O notation conventionally describes the WORST case - the upper bound
// on how many steps an algorithm could possibly take.

// ----- Linear Search -----
// arr = [5, 6, 1, 0, 7]      (unsorted)
// Best Case  -> search(5)    -> target is the very first element checked -> x = 1
// Worst Case -> search(100)  -> target is missing / all the way at the end -> x = n
// Big O = O(n)   (we always quote the worst case)

console.log(linearSearch([5, 6, 1, 0, 7], 5));   // best case,  x = 1
console.log(linearSearch([5, 6, 1, 0, 7], 100)); // worst case, x = n (not found)

// ----- Binary Search -----
// arr = [5, 8, 10, 15, 20]      (sorted)
// Best Case  -> search(the middle element) -> found on the very first check -> x = 1
// Worst Case -> search(100)                -> not found, halved all the way down -> x = log2(n)
// Big O = O(log n)   (we always quote the worst case)

let sortedArr = [5, 8, 10, 15, 20];
console.log(binarySearch(sortedArr, sortedArr[Math.floor(sortedArr.length / 2)])); // best case, x = 1
console.log(binarySearch(sortedArr, 100)); // worst case, not found

// ----- "Binary Search >>>> Linear Search" in efficiency -----
// comparing the WORST cases (what Big O actually reports):
//      Linear Search worst case : O(n)
//      Binary Search worst case : O(log n)
// log n grows so much slower than n that binary search wins by a landslide
// as the array gets bigger - that's the ">>>>" from the notes.

// ===================== GRAPH: x (steps) vs n (input size) =====================

// plot n on the x-axis and steps(x) on the y-axis, both scaled the same way
// (10, 100, 1000, ... 1 Million):
//
//   x (steps)
//   1M |                                              ,' linear search
//      |                                          ,-'      (straight line, y = x)
// 1000 |                                      ,-'
//      |                                  ,-'
//  100 |                              ,-'
//      |                          ,-'
//   10 |                      ,-' _______________________ binary search
//      |                 ,-'  _--                          (barely rises, y = log2(x))
//      +--------------------------------------------------------> n
//           10        100        1000                  1M

// Linear search   -> a straight diagonal line (slope 1, y = n). doubling n
//                    doubles the steps, every time. it keeps climbing forever.
// Binary search   -> looks almost flat next to it. it curves upward but so
//                    slowly that it barely leaves the bottom of the graph.

// the gap between the two lines is the whole point of Big-O:
// n = 1,000,000       -> linear search ~ 1,000,000 steps
//                     -> binary search ~ log2(1,000,000) ~ 20 steps
// same data, ~50,000x fewer comparisons for binary search

// ===================== SUMMARY =====================

// Linear Search : O(n)     (worst case) -> steps grow directly with n -> steep straight line
// Binary Search : O(log n) (worst case) -> steps grow by halving n each time -> near-flat curve
// Big O always quotes the worst case - both algorithms have a best case of O(1)
// (the target happens to be the very first element checked)
// this is why binary search stays fast even as n gets huge, as long as
// the array is sorted first

// Space Complexity: TODO - haven't learnt this yet
