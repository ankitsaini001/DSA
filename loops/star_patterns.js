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

for (let i = 0; i <= n; i++) { 
    let row = "";
    let count = 1;
    for (let j = 0; j <= i; j++){
        row = row + (count++);
    }
    console.log(row);
}