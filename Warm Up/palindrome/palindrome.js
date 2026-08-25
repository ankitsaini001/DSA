function checkPalindrome(n){
    // first let store original value of n as a copy
    let nCopy = n;
    let rev = 0; // store rev means reverse value
    while(n > 0){
        let remender = n % 10; // to get the last digit
        rev = (10 * rev) + remender; // this formula is used to get the last digits and make it not added
        n = n / 10; // to remove the last digit from the original number
    }
    // condition to check either it is palindrome or not
    if(rev === nCopy){
        return true;
    }else{
        return false;
    }
}
console.log(checkPalindrome(123456789));
console.log(checkPalindrome(121));

// how to handle Negative value
// So, As per logic a negative can never be a palindrome, how to handle it
function checkNegativePalindrome(n) {
    // we can add a check initially either that number is negative or not
    if (n < 0) {
        return false;
    }
    // copy that original number
    let nCopy = n;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    if (rev === nCopy) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNegativePalindrome(123));
console.log(checkNegativePalindrome(121));
console.log(checkNegativePalindrome(-121));

// another better way to return the result
function palindromeReturnCall(n){
    if(n < 0){
        return false;
    }
    let nCopy = n;
    let rev = 0;

    while(n > 0){
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    // if(rev === nCopy){
    //     return true;
    // }else {
    //     return false;
    // }
    return (rev === nCopy);
}
console.log(palindromeReturnCall(121));
console.log(palindromeReturnCall(-121));
console.log(palindromeReturnCall(10));

// leetcode
var isPalindrome = function (x) {
    // first lets check the negative value
    if (x < 0) {
        return false;
    }
    //copy the original value
    let nCopy = x;
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
    return (reverse === nCopy);
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));