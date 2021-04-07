//LOOPS

// Loops give you posibility to repeat some parts of code many times.
// In JS we have loops such as for, for of, for in, while, do while.

// for loop

for (let i = 0; i < 10; i++) {
    console.log(i); // 0,1,2, ...,9
}

// nested loop

for (let k = 0; k < 10; k++) {
    console.log(k) // 0,1,..,9
    for( l = 0; l < 2; l++) {
        console.log(l) // (0,1)*10
    }
}

// break / continue

for (let m = 1; m <=5; m++) {   // when m value is 3 loop stops
    if (m == 3) break; // 1,2
    console.log(m)
}

for (let n = 1;n <=5; n++) {
    if (n == 3) break;       // when n value is 3, loop start next cycle so at the end in return will not see 3
    console.log(n)  // 1,2,4,5
}

// while loop

let o = 10;
while(o > 0) {
    console.log(o);
    j--;
}

// do while loop - working like while loop except it will runs at least once
// sometimes its important and usefull

let p = 1;
do {
    console.log(p);
    p++;
} while(p > 10)