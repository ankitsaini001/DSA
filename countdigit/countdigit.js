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