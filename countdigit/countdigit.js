// Count Digit

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

// practice 1
let n_count = 23;
let count = 0;
while (n_count > 0) {
    n_count = Math.floor(n_count / 10);
    count++;
}
console.log("count digit: " + count);

// corner case: what if n=0;
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