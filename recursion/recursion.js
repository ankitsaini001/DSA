// Recursion - basics

// Q1. Factorial using recursion

// Write a function factorial(n) that returns n!.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Q2. Sum of first n natural numbers using recursion

// Write a function sumNatural(n) that returns 1 + 2 + ... + n.

function sumNatural(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumNatural(n - 1);
}
console.log(sumNatural(5)); // 15

// Q3. Fibonacci using recursion

// Write a function fibonacci(n) that returns the nth fibonacci number.

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8
for (let i = 0; i < 8; i++) {
    console.log(fibonacci(i)); // 0 1 1 2 3 5 8 13
}

// Q4. Power function using recursion

// Write a function power(base, exp) that returns base^exp.

function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
console.log(power(2, 5)); // 32
console.log(power(5, 0)); // 1
