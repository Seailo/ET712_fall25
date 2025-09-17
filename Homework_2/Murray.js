/*

Andrew Murray

Homework 2 - functions, loops, and conditional statement

*/


//Exercise 1
function name_counting() {
    console.log("------ Exercise 1 ------");
    let length = parseInt(prompt("Enter the number of names:"));
    let names = [];
    for (let i = 0; i < length; i++) {
        let nm = prompt(`Enter name #${i + 1}`);
        names.push(nm);
    }

    let count = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < 5) {
            count++;
        }
    }
    return count;
}

// Test with the provided array:
let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
console.log(`Number of names < 5 chars = ${name_counting(names.length)}`);


// Exercise 2:
function checkNum() {
    console.log("------ Exercise 2 ------");
    let input;
    // keep prompting until a valid number
    while (true) {
        input = prompt("Enter a number:");
        if (input !== null && !isNaN(parseFloat(input))) {
            break;
        }
    }
    let num = parseInt(input);
    return num % 2 === 0;
}

// Example usage:
let result = checkNum();
console.log(`Even number? ${result}`);
