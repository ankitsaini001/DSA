// Time & Space Complexity - notes
// Example used: Linear Search vs Binary Search

// ===================== LINEAR SEARCH =====================

// works on ANY array - sorted or unsorted
// checks elements one by one, from start to end

// arr = [2, 1, 3, 5, 4, 7]
// search(5) -> in the worst case we may have to check every single element
// before finding it (or reaching the end if it's not present)

// number of steps (x) is directly proportional to n (size of the array):
// n = 1000 -> x = 1000
// n = 100  -> x = 100
// n = 1    -> x = 1
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

// n = 1000 -> x = log2(1000) ~ 10   (2^10 = 1024, close to 1000)
// n = 100  -> x = log2(100)  ~ 7    (2^7  = 128, comfortably covers 100)

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


// ===================== SUMMARY =====================

// Linear Search : O(n)     -> steps grow directly with n
// Binary Search : O(log n) -> steps grow by halving n each time
// this is why binary search stays fast even as n gets huge, as long as
// the array is sorted first

// Space Complexity: TODO - haven't learnt this yet
