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