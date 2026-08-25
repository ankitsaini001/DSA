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