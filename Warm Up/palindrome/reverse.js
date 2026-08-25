var reverse = function (x) {
    // first lets check the negative value
    // if (x < 0) {
    //     return false;
    // }
    //copy the original value
   // let nCopy = x;
    let reverse = 0;

    // run the loop now
    while (x > 0) {
        let reminder = x % 10;
        reverse = (10 * reverse) + reminder;
        x = Math.floor(x / 10);
    }
    //    if(reverse === nCopy){
    //     return true;
    //    }else{
    //     return false;
    //    }
    return (reverse);
};
console.log(reverse(121));
console.log(reverse(123456789));

// handle negative useDebugValue
function reverseNegative(n) {
    let nCopy = n;
    let rev = 0;
    n = Math.abs(n);
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;   
        n = Math.floor(n / 10);
    }
    return (nCopy < 0) ? -rev : rev;
}

console.log(reverseNegative(-111));  // expect -111
console.log(reverseNegative(123));   // expect 321
console.log(reverseNegative(-120));  // expect -21