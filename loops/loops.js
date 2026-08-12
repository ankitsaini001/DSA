// for loop and while

// print Hello world 10times

function printHelloWorld() { 
    for (let i = 1; i <= 10; i++){
        console.log("Hello World");
    }
}
printHelloWorld();

// print hello world 
function HelloWorld() {
    for (let i = 3; i < 5; i++){
        console.log("Hello World" + " " + i);
    }
}
HelloWorld();

function helloWorld(){
    for(let i = 3; i <=5; i++){
        console.log("Hello World " + " " + i);
    }
}
helloWorld();

function incLoopByTwo() { 
    for (let i = 2; i < 9; i = i + 2) { 
        console.log("Hello World By Increment By Two" + " "+ i) ;
    }
}
incLoopByTwo();

// Reverse Loop
function reverseLoop() { 
    for (let i = 5; i > 0; i--) { 
        console.log("HW " + " " + i);
    }
}
reverseLoop();

function looping() { 
    for (let i = 5; i < 4; i++) { 
        console.log("HWW");
    }
}
looping();

 // Infinite Loop
// function infinite() { 
//     for (let i = 1; i > 0; i++) { 
//         console.log("Hwwww");
//     }
// }
// infinite();

// call a function inside a loop

function greet(x) { 
    console.log("Namasate!" + " " + x);
}

for (let i = 0; i < 5; i++) { 
    greet(i);
}

// array with loop
let arr = [10, 20, 30, 40, 50, 60];
//arr.length , it calculate the length
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// print all the even number
for (let i = 0; i < arr.length; i++) { 
    if (arr[i] % 2 == 0) {
        console.log("Value: " + " " + arr[i] + " is Even");
    } else { 
        console.log("Value: " + " " + arr[i] + " is Odd");
    }
}
//Sum from 1 to N
function sumToN(n) {
  // your code
  let sum = 0;
  for(let i = 1; i <= n; i++){
      sum = sum + i;
  } 
  console.log(sum);
}
sumToN(5);
sumToN(15);
sumToN(1);

//Write a function that returns the number of digits in a positive integer.
function countDigits(num){
    let number = Math.abs(num).toString().length;
    console.log(number);
}
countDigits(12345); // 5
countDigits(7);     // 1
countDigits(100);   // 3

//Q6. Reverse a number
function reverseNumber(num){
    let reverse = 0;
    while(num>0){
        let digit = num%10;
        //console.log(digit);
        reverse = reverse*10+digit;
        //console.log(reverse);
        num=Math.floor(num/10);
        //console.log(num);
    }
    console.log(reverse);
}
reverseNumber(12345); // 54321
reverseNumber(1200);  // 21
reverseNumber(987);   // 789

//Functions + for loop
function printNumbers(n) {
    for(let i = 1; i<=n;i++){
        console.log(i);
    }
}

printNumbers(5);

// print only even numbers
function printEvenNumbers(n) {
    for(let i = 1; i<=n; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

printEvenNumbers(10);

//Find the sum of even numbers from 1 to N
function sumEvenNumbers(n) {
    let sum=0;
    for(let i=1; i <=n; i++){
        if (i%2==0) {
            sum = sum+i;
        }
    }
        return sum;
}

console.log(sumEvenNumbers(10)); // 30

//Find the largest number from 1 to N
function findLargest(n) {
    let num = 0;

    for(let i = 0; i<=n;i++){
        if(i>num){
            num=i;
        }
    }
    return num;
}

console.log(findLargest(10)); // 10

//Count numbers divisible by 3
function countDivisibleBy3(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            num = num+1;
        }
    }
    return num;
}

console.log(countDivisibleBy3(10));

//count even number
function countEvenNumbers(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            num++;
        }
    }
    return num;
}

console.log(countEvenNumbers(10)); // 5
console.log(countEvenNumbers(20)); // 10
console.log(countEvenNumbers(7));  // 3

// sum of odd numbers
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumOddNumbers(10)); // 25
console.log(sumOddNumbers(5));  // 9
console.log(sumOddNumbers(1));  // 1

//factorial
function factorial(n) {
    let value = 1;
    for (let i = 1; i <= n; i++) {
        value = value * i;
    }
    return value;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1

//Find the sum of digits
function sumOfDigits(n) {
    let sum = 0;
    while(n>0){
        let digit = n%10;
        sum = sum+digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
sumOfDigits(1234); // 10
sumOfDigits(567);  // 18
sumOfDigits(9);    // 9

function reverseNumber(n) {
    let reverse = 0;
    while(n>0){
        let digit=n%10;
        reverse=reverse*10+digit;
        n=Math.floor(n/10);
    }
    return reverse;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(123));   // 321
console.log(reverseNumber(1200));  // 21