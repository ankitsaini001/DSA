console.log("Hello World"); // first DSA program
console.log(7);
console.log("7");
console.log(true);

let a = [10, 20];
console.log(a);
let b = a;
b.push(30);

//console.log(a); // [10,20,30]
console.log(b); // [10,20,30]


const user1 = {
    name: "Ankit"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);

function name(name) {
    console.log("Namasate " + name);
}

let greet = "virat";
name(greet);
name("ankit");
name("nikhil");
name("akshay"); // resuse a function


function sum(a, b) {
    let c = a + b;
    console.log(c);
}

sum(3, 4);


function multi(a, b) {
    let c = a * b;
    console.log(c);
}

multi(3, 4);


// return the square value

function square(x) {
    let result = x * x;
    return result;
}

let value = square(4);
console.log(value);


// create a function which will accept the age and tell wheather a user is eligible for a vote
//or not

function checkUserAge(age) { 
    if(age < 1){
        return "Invalid Data";
    } else if (age > 18) {
        return "User is eligible for vote";
    } else { 
        return "User is not eligible for vote";
    }
}

let userInfo = checkUserAge(10);
console.log(userInfo);


// check if the number is even or odd

function isEven(number) { 
    if (number % 2 === 0) {
        console.log("Number is even");
    } else { 
        console.log("Number is Odd");
    }
}
isEven(2);isEven(3);isEven(4);isEven(5);isEven(6);

// Q1. Sum of two numbers

// Write a function sum(a, b) that returns the sum.

function sum(a, b) {
    let result = a + b;
    return result;   
}
let value = sum(10, 20);
console.log(value);

// Q2. Check even or odd

// Write a function isEven(n) that returns true if n is even and false otherwise.

function isEven(x) { 
    if (x % 2 === 0) {
        console.log("Value is Even");
    } else { 
        console.log("Value is Odd");
    }
}
isEven(10); // true
isEven(7);  // false

// Q3. Find the largest number

// Write a function findMax(a, b, c) that returns the largest of the three numbers.

function findMax(a,b,c){
    let max;
    if (a>b) {
        max = a;
    }else{
        max=b;
    }
    if (max > c) {
        return max;
    }else{
        return c;
    }
}
console.log(findMax(10, 25, 15)); // 25
console.log(findMax(50, 20, 30)); // 50