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

// Alphanumeric Palindrome 
var isPalindrome = function(s) {
  if(s == ""){
    return true;
  }  
  let character = s.toLowerCase();
  let cleanedString = character.replace(/[^a-z0-9]/gi, "");

  let left = 0;
  let right = cleanedString.length - 1;

  while(left < right){
    if(cleanedString[left] !== cleanedString[right]){
        return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));

//leetcode: 680. Valid Palindrome II
//Given a string s, return true if the s can be palindrome after deleting at most one character from it.

var validPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return isPalindrome(s, left+1, right) ||
            isPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
};

function isPalindrome(s, l, r){
    while(l<r){
            if(s[l] !== s[r]){
        return false;
    }
    l++;
    r--;
    }
    return true;
}

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abc'));