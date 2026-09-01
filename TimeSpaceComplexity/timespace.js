// Time & Space Complexity - notes
// Example used: Linear Search vs Binary Search

// ===================== WHAT IS TIME COMPLEXITY =====================

// It is used to measure efficiency of algorithm in terms of speed,
// as the input size grows.
//                          ^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^^^^^
//                          "speed efficiency"   -> only matters/shows up
//                                                  WHEN INPUT SIZE GROWS
//                          (for a tiny fixed input, most algorithms feel
//                          equally fast - the difference only becomes
//                          visible as n gets large)

//      Time Complexity  !=  Time taken
//
// "Time taken" (actual clock time, e.g. seconds/ms) depends on the
// machine and language it runs on - a faster CPU or a lower-level
// language can run the SAME algorithm quicker.
//
// Time Complexity is independent of machine/language - it only
// measures how the NUMBER OF STEPS grows as input size (n) grows,
// so it stays the same no matter what hardware or language runs it.

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
// question: how many times (x) can n be halved before it becomes 1?

//      n x 1/2 x 1/2 x 1/2 x ... (x times) = 1
//      n x (1/2)^x = 1
//      n / 2^x = 1
//      n = 2^x
//      log2(n) = x        <- take log base 2 of both sides

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

// side by side, for the same n:
//      Linear Search:  n = 100  -> 100 times   |  n = 1000 -> 1000 times
//      Binary Search:  n = 100  -> 7   times   |  n = 1000 -> 10   times
// binary search needs FAR fewer steps for the exact same input size
// -> binary search is the more SPEED EFFICIENT algorithm  (checkmark)

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

// ===================== OTHER COMMON TIME COMPLEXITIES =====================
// (general patterns, not specific to search - these show up everywhere)

// ----- O(n log n) -----
// a loop that runs n times, where EACH iteration itself does something
// that takes log n steps (e.g. a halving-style operation):
//
//      for (i = 0; i < n; i++) {    <- n times
//          ... something log n ...  <- 1/2 x 1/2 x 1/2 ... -> log n
//      }
//
// total work = n (outer loop) x log n (inner halving) = O(n log n)
// this is exactly how algorithms like merge sort get their complexity

// ----- O(n^3) -----
// three nested loops, each running n times -> n x n x n = O(n^3)

// ----- O(n^2) -----
// two nested loops, each running n times -> n x n = O(n^2)
// operation count grows as a perfect square of n:
//      n = 2 -> 4  operations   (2 x 2)
//      n = 3 -> 9  operations   (3 x 3)
//      n = 4 -> 16 operations   (4 x 4)
//      n = 5 -> 25 operations   (5 x 5)
// NOTE: my source notes had this example labelled "O(2^n)", but the numbers
// above (4, 9, 16, 25) match n^2, not 2^n (which would be 4, 8, 16, 32).
// double check this bit against the video - this example looks like plain
// O(n^2) from two nested loops. true O(2^n) (exponential) usually comes from
// things like generating all subsets, or naive recursive Fibonacci.

// ----- O(1) : constant time -----
// unlike every complexity above (they all grow as n grows), O(1) means the
// work stays the SAME no matter how big n is.
// example: direct array index access
//      arr = [ ...n elements... ]
//      arr[5]   -> jumps straight to that memory slot in 1 operation,
//                  whether the array has 10 elements or 10 million

// growth order, slowest to fastest growing (best to worst):
//      O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)

// ===================== THE BIG PICTURE: ALL COMPLEXITIES ON ONE GRAPH =====================
// (the classic "Big-O complexity chart" - x-axis: n (input size) ->, y-axis: time/steps ^)

//   time
//    ^  O(n!)   O(2^n)   O(n^2)   O(n log n)
//    |    |        |        |          |                              O(n)
//    |    |        |        |          |                         ,-''
//    |    |        |        |          |                    ,-''
//    |    |        |        |         ,'               ,-''
//    |    |        |       ,'        ,'           ,-''
//    |    |       ,'      ,'        ,'       ,-''
//    |   ,'      ,'      ,'       ,'    ,-''                    _____ O(log n)
//    |  ,'      ,'      ,'      ,' ,-''-----------------------''
//    | ,'     ,'      ,'    ,-''
//    +----------------------------------------------------------------- O(1)
//    +---------------------------------------------------------------------> n

// from steepest (worst) to flattest (best), the curves rank as:
//      O(n!)  >  O(2^n)  >  O(n^2)  >  O(n log n)  >  O(n)  >  O(log n)  >  O(1)

// this is the same reference chart you'll see everywhere in DSA (often just
// called "the Big-O complexity chart"). every algorithm's time complexity
// lands on one of these curves, and "optimizing" an algorithm usually means
// moving it to a flatter curve on this chart (fewer extra operations as n grows)

// ===================== SPACE COMPLEXITY =====================
// (extra memory an algorithm needs, ON TOP OF the input itself, as n grows)

// ----- Rule 1: a fixed number of scalar variables = O(1) space -----
// doesn't matter if it's 1 variable or 20 (i, j, max, ...) - as long as the
// COUNT of variables doesn't grow with n, it's constant ("O(1)") space

function findMaxArray(arr) {
    let max = arr[0]; // <- O(1) space: just one extra variable
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxArray([3, 7, 2, 9, 4])); // 9
// Time  : O(n) -> one loop over n elements
// Space : O(1) -> only ever holds one extra variable ("max"), regardless of n

// ----- Rule 2: a new array of size n = O(n) space -----

function doubleArray(arr) {
    let newArray = new Array(arr.length); // <- allocates n new slots
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i] * 2;
    }
    return newArray;
}
console.log(doubleArray([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// Time  : O(n) -> one loop over n elements
// Space : O(n) -> the new array grows exactly as big as the input

// ----- Rule 3: a new n x n structure (matrix) = O(n^2) space -----
// e.g. building a matrix where row k = input array scaled by 2^k:
//      input  = [1, 3, 2, 8, 10]                                  (n = 5)
//      output = [ [1, 3, 2, 8, 10],
//                 [2, 6, 4, 16, 20],
//                 [4, 12, 8, 32, 40],
//                 [8, 24, 16, 64, 80],
//                 [16, 48, 32, 128, 160] ]           (n rows x n cols)
// that output needs n*n extra cells -> O(n^2) extra space

// ----- summary of the space rules -----
//      fixed number of variables (i, j, max, ...) -> O(1)   constant space
//      one new array sized n                      -> O(n)   linear space
//      one new n x n matrix/table                 -> O(n^2) quadratic space

// ===================== COMBINING LOOPS: ADD vs MULTIPLY =====================

// ----- two SEPARATE (sequential) loops -> ADD their complexities -----
//      for (i = 0; i < n; i++) { ... }   <- n steps
//      for (j = 0; j < n; j++) { ... }   <- n steps
// total = n + n = 2n  ->  O(2n)

// ----- a loop NESTED inside another -> MULTIPLY their complexities -----
//      for (i = 0; i < n; i++) {
//          for (j = 0; j < n; j++) { ... }
//      }
// total = n x n = n^2  ->  O(n^2)   ("nested" loops multiply)

// three independent (not nested) loops, one after another:
//      for (...) { }   for (...) { }   for (...) { }
// total = n + n + n = 3n  ->  O(3n)

// ===================== RULE: DROP THE CONSTANTS =====================
// Big-O cares about the SHAPE of growth as n gets huge, not the exact count.
// so a constant multiplier in front of n gets dropped:
//      O(2n)  -> O(n)
//      O(3n)  -> O(n)
//      O(10n) -> O(n)
// they're all still "linear" - twice, three times, or ten times the work is
// still nothing compared to the JUMP from O(n) to O(n^2)

// proof by the numbers - O(n^2) vs a linear one (after dropping constants,
// O(n), O(2n), O(3n), O(10n) all behave the same way, growth-order wise):

// O(n^2):
//      n = 10          -> x = 100                    (10^2)
//      n = 100         -> x = 10,000                 (100^2)
//      n = 1,000,000   -> x = (1,000,000)^2 = 1 trillion

// O(3n)  (before dropping the constant):
//      n = 10          -> x = 30
//      n = 100         -> x = 300
//      n = 1,000,000   -> x = 3,000,000

// at n = 1,000,000: O(n^2) needs 1 trillion steps, O(3n) needs only 3 million
// - the constant (2x, 3x, 10x, whatever) barely matters next to the jump
// from n to n^2

// ===================== RULE: DROP LOWER-ORDER TERMS =====================
// when an algorithm's real work adds up to a SUM of different-order terms,
// Big-O keeps only the fastest-growing (dominant) term and drops the rest -
// as n gets huge, the smaller terms become insignificant next to the big one

// ----- example: a nested loop followed by a separate loop -----
//      for (i = 0; i < n; i++) {      <- nested loop -> O(n^2)
//          for (j = 0; j < n; j++) { }
//      }
//      for (k = 0; k < n; k++) { }    <- separate loop -> O(n)
//
// these two blocks are sequential (not nested in each other), so ADD them:
//      O(n^2) + O(n)  =  O(n^2 + n)
// n^2 is the dominant term (it grows faster than n), so drop the lower-order n:
//      O(n^2 + n)  =>  O(n^2)

// ----- more examples of the same rule -----
//      O(n^3 + n + n^2)             -> keep only the highest-order term
//                                      (cross out n and n^2)
//                                   => O(n^3)
//
//      O(n^2 + 2n)                  -> drop the lower-order 2n term
//                                   => O(n^2)
//
//      O(n^2 + n*log(n) + 2n + c)   -> n^2 dominates n*log(n), 2n, and the
//                                      constant c - drop all three
//                                   => O(n^2)

// ----- the two simplification rules, together -----
//      1) drop constant multipliers  : O(3n)      -> O(n)
//      2) drop lower-order terms     : O(n^2 + n) -> O(n^2)
// Big-O only cares about the single fastest-growing term as n -> infinity
