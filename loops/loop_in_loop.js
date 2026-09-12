// Nested loops - the outer loop runs once per "row", and the inner loop
// runs all the way through for each of those rows.

// full 3x3 grid: inner loop runs 3 times for every i -> 9 lines
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("i = " + i + " j = " + j);
        }
    }

    // loop within loop
    // j < i, so row 0 prints nothing, row 1 prints once, row 2 prints twice
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

// loop with loop example
// j <= i, so every row prints one more line than the row before it
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

// inner loop counts DOWN from i instead of up
for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log("i = " + i + " j = " + j);
    }
}

// reverse looping
// outer loop counts down, so the rows keep getting shorter
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

// print every (i, j) pair from 1..n - that is n*n lines
function printPairs(n) {
    for(let i=1; i<=n;i++){
        for(let j=1;j<=n;j++){
            console.log(i + " " + j);
        }
    }
}

printPairs(3);

// same two loops, but counting instead of printing - the answer is always
// n*n, which is the classic O(n^2) shape
function countPairs(n) {
    let count = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            count++;
        }
    }
    return count;
}

console.log(countPairs(3)); // 9
console.log(countPairs(4)); // 16
console.log(countPairs(5)); // 25

let arr = [2, 5, 8];
// j starts at i+1, so each pair shows up only once and nothing pairs with
// itself -> (2,5) (2,8) (5,8)
function printArrayPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
printArrayPairs(arr);

let arr1 = [1, 2, 3];

// NOTE: this redeclares printPairs from above - the last definition wins.
// here j starts at 0, so every pair appears twice plus the self-pairs -> 9 lines
function printPairs(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            console.log(arr[i], arr[j]);
        }
    }
}

printPairs(arr1);