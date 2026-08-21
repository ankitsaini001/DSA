// star pattern
let n = 4;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + "*";
    }
    console.log(row);
}

for (let i = 0; i < n; i++){
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
    for (let j = 0; j <= i; j++){
        row = row + (j+1);
    }
    console.log(row);
}

// reverse pattern
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n - i; j++) { 
        row = row + (j + 1);
    }
    console.log(row);
}

for(let i = 0; i<n;i++){
    let row = "";
    for(let j=0; j<n-i;j++){
        row = row + "*";
    }
    console.log(row);
}

function printSquare(n) {
    for(let i=0; i<n;i++){
    let row = "";
        for(let j=0; j<n;j++){
            row = row + "*";
        }
        console.log(row);
    }
}

printSquare(3);

let nstar = 5;
for (let i = 0; i < nstar; i++) { 
    let row = "";
    for (let j = 0; j < nstar - (i + 1); j++){
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
for(let i=0; i<nxn; i++){
    let row="";
    for(let j=0; j<i; j++){
        row = row + "*";
    }
    console.log(row);
}

// Pattern 3: Print a Right-Angled Number Triangle
for(let i=0; i< nxn; i++){
    let row="";
    for(let j=0; j<i; j++){
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
for(let i = 0; i<nxn;i++){
    let row = "";
    for(let j=0; j<nxn-i;j++){
        row = row + (j+1);
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