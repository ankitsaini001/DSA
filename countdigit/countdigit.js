// Count Digit
// Idea: chop the last digit off with Math.floor(n / 10) and count how many
// chops it takes to reach 0. Each version below fixes one more corner case.

// first version - works for positive numbers only
function countDigit(n){
    let count = 0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(countDigit(1233));
console.log(countDigit(123));
console.log(countDigit(12));
console.log(countDigit(1));

// practice 1 - same loop written out without a function
let n_count = 23;
let count = 0;
while (n_count > 0) {
    n_count = Math.floor(n_count / 10);
    count++;
}
console.log("count digit: " + count);

// corner case: what if n=0;
// the while loop never runs for 0, so it would wrongly return 0 -> return 1 early
function countDigits(n){
    if(n===0){
        return 1;
    }
    let count = 0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(countDigits(1233));
console.log(countDigits(123));
console.log(countDigits(12));
console.log(countDigits(1));
console.log(countDigits(0));
console.log(countDigits(-1));

// handle negative number
// NOTE: this redeclares countDigits above, so both console.log blocks
// actually run this version
function countDigits(n) {
    if (n === 0) {
        return 1;
    }
    n = Math.abs(n); // it will change the negative value to positive number by which the count become 1 from 0.
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
console.log(countDigits(1233));
console.log(countDigits(123));
console.log(countDigits(12));
console.log(countDigits(1));
console.log(countDigits(0));
console.log(countDigits(-1));

// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.
// final version: zero and negatives handled together
function countDigitsCheck(n){
    // handle corner cases as well
    if(n === 0){
        return 1;
    }
    n = Math.abs(n);
    let count =0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(countDigitsCheck(1234567890));
console.log(countDigitsCheck(-1234567890));