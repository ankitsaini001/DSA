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