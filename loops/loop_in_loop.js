    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("i = " + i + " j = " + j);
        }
    }

    // loop within loop
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

// loop with loop example
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log("i = " + i + " j = " + j);
    }
}

// reverse looping
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("i = " + i + " j = " + j);
    }
}

function printPairs(n) {
    for(let i=1; i<=n;i++){
        for(let j=1;j<=n;j++){
            console.log(i + " " + j);
        }
    }
}

printPairs(3);

function countPairs(n) {
    let count = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            count++;
        }
    }
    return count;
}

console.log(countPairs(3)); // 9
console.log(countPairs(4)); // 16
console.log(countPairs(5)); // 25

let arr = [2, 5, 8];
function printArrayPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
printArrayPairs(arr);