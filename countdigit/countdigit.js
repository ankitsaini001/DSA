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