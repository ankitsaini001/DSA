// star pattern
let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + "*";
    }
    console.log(row);
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + "*";
    }
    console.log(row);
}

// for (let i = 0; i <= n; i++) { 
//     let row = "";
//     let count = 1;
//     for (let j = 0; j <= i; j++){
//         row = row + (count++);
//     }
//     console.log(row);
// }

for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

// reverse pattern
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row = row + "*";
    }
    console.log(row);
}

function printSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}

printSquare(3);

let nstar = 5;
for (let i = 0; i < nstar; i++) {
    let row = "";
    for (let j = 0; j < nstar - (i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }
    console.log(row);
}

// switch pattern
for (let i = 0; i < nstar; i++) {
    let row = "";
    let pattern = 1;
    for (let j = 0; j <= i; j++) {
        row = row + pattern;
        if (pattern === 1) {
            pattern = 0;
        } else {
            pattern = 1;
        }
    }
    console.log(row);
}

let toggle = 1;
for (let i = 0; i < nstar; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log(row);
}

// Pattern 1: Print nxn Star Square
let nxn = 5;
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn; j++) {
        row = row + "*";
    }
    console.log(row);
}

// Pattern 2: Right-Angled Star Triangle
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + "*";
    }
    console.log(row);
}

// Pattern 3: Print a Right-Angled Number Triangle
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + "*";
    }
    console.log(row);
}

for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

// Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn - i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

//Print a Right-Aligned Right-Angled Triangle of Stars
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn - (i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }
    console.log(row);
}

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row += toggle;
        toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
}

let n = 4;
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row += toggle;
        toggle = toggle === 1 ? 0 : 1;
    }
    console.log(row);
}

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += "*";
    }
    console.log(row);
}

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (j + 1);
    }
    console.log(row);
}

// star pattern
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn; j++) {
        row = row + "*";
    }
    console.log("Star Pattern " + row);
}

// right angle triangle
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + "*";
    }
    console.log(row);
}

// right angle number triangle
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += j + 1;
    }
    console.log("Star Right Angle Number Pattern " + row);
}

// Print a Right-Angled Triangle of Repeated Numbers
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (i + 1);
    }
    console.log("Print a Right-Angled Triangle of Repeated Numbers " + row);
}

// Print a Reverse Right-Angled Triangle of Increasing Numbers
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn - i; j++) {
        row += j + 1;
    }
    console.log("Reverse Increasing Numbers " + row);
}

// Print a Right-Aligned Right-Angled Triangle of Stars
for (let i = 0; i < nxn; i++) {
    let row = "";
    for (let j = 0; j < nxn - (i + 1); j++) {
        row += "_";
    }
    for (let k = 0; k < i + 1; k++) {
        row += "*";
    }
    console.log("Right-Aligned Right-Angled Triangle of Stars " + row);
}

// Print a Right-Angled Triangle of Alternating 1s and 0s
for (let i = 0; i < nxn; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row += toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }
    console.log("toggle: " + row);
}

// practice 1
function printSquareTest(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + "*";
        }

        console.log(row);
    }
}
printSquareTest(4);

// practice 2, printTriangle
function printTriangle(n){
    for(let i=0; i<n; i++){
        let row="";
        for(let j=0; j<=i; j++){
            row += "*";
        }
        console.log(row);
    }
}
printTriangle(5);

// print reverse triangle
function printReverseTriangle(n){
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-i; j++){
            row += "*";
        }
        console.log(row);
    }
}
printReverseTriangle(5);

// print pattern
function printPattern(n){
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<2*i+1; j++){
            row += "*";
        }
        console.log(row);
    }
}
printPattern(5);

//Next challenge: Right-aligned triangle
function printRightTriangle(n) { 
    for (let i = 0; i < n; i++) { 
        let row = "";
        for (let j = 0; j < n - (i + 1); j++) { 
            row += " ";
        }
        for (let k = 0; k <= i; k++) { 
            row += "*";
        }
        console.log(row);
    }
}
printRightTriangle(5);

//printPyramid
function printPyramid(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        // Add spaces
        for (let j = 0; j < n - (i + 1); j++) {
            row += " ";
        }

        // Add stars
        for (let k = 0; k < 2 * i + 1; k++) {
            row += "*";
        }

        console.log(row);
    }
}
printPyramid(5);

//reverse pyramid
function reversePyramid(n){
	for(let i=0; i<n;i++){
		let row = "";
		for(let j=0; j<i; j++){
			row += "";
		}
		for(let k=0; k < 2*(n-i)-1; k++){
			row += "*";
		}
		console.log(row);
}
}
reversePyramid(5);