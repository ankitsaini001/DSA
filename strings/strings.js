// Strings - basics

// traverse a string character by character
function printChars(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
printChars("Ankit");

// Q1. Reverse a string (without using .split().reverse().join())

// Write a function reverseString(str) that returns the reversed string.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // "olleh"

// Q2. Check if a string is a palindrome

// Write a function isPalindromeString(str) that returns true/false.

function isPalindromeString(str) {
    return str === reverseString(str);
}
console.log(isPalindromeString("madam")); // true
console.log(isPalindromeString("hello")); // false

// Q3. Count vowels in a string

// Write a function countVowels(str) that returns how many vowels it has.

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Namasate")); // 4

// Q4. Check if two strings are anagrams

// Write a function isAnagram(a, b) that returns true if a and b contain
// exactly the same characters (just rearranged).

function isAnagram(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    let sortedA = a.split("").sort().join("");
    let sortedB = b.split("").sort().join("");
    return sortedA === sortedB;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// corner case: empty string
console.log(reverseString("")); // ""
console.log(isPalindromeString("")); // true
