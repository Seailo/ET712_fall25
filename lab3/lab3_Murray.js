/*
*ANDREW MURRAY
*lab3, loops
* Sept 4, 2025
*/
console.log("Andrew Murray")

console.log(`\n ------ Example 1: For Loop as a counter -------`)
//for loop to print from 0- to 5
for (let x = 0; x < 5; x++) {
    console.log(x)
}

console.log(`\n ------ Example 2: For Loop as a counter -------`)
for (let x = -20; x <= 5; x++) {
    console.log(x)
}

console.log(`\n ------ Example 3: for loop as decrement counter-------`)
//print numbers from 3 to 0 --> 3, 2,1,0
for (let x = 3; x >= 0; x--) {
    console.log(x)
}

console.log(`\n ------ Example 4: For Loop in an array -------`)
let cars = ['Mazda', 'BMW', 'Tesla', 'Jeep', 'Honda']
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index])
}

console.log("\n for loop using 'of' statement")
for (let each of cars) {
    console.log(each)
}

console.log(`\n ------ Example 5: Application using for loops -------`)
let car_counter = 0
for (let index = 0; index < cars.length; index++) {
    if (cars[index].length > 4) {
        car_counter++
    }
}
console.log(`There are ${car_counter} car names with 4+ characters`)

console.log(`\n ------ Example 6: Application using for loops -------`)
// ask the user to guess number between 1 and 9 
let GUESS = 8
for (let counter = 1; counter <= 3; counter++) {
    let user_number = parseInt(prompt("Enter a number between 1 and 9"))
    console.log(`User guess = ${user_number}`)
    if (user_number === GUESS) {
        console.log(`Great the number is ${GUESS}`)
        break
    } else if (user_number > GUESS) {
        console.log(`Wrong! The number should be lower`)
    } else if (user_number < GUESS) {
        console.log(`Wrong! the number should be higher`)
    }
    if (counter === 3) {
        console.log(`Better luck next time`)
    }
}

console.log(`\n ------ Example 7: while loop as a counter -------`)
// print from 0 - 5 
let y = 0
while (y <= 5) {
    console.log(y)
    y++
}

console.log(`\n ------ Example 8: validate an input -------`)
// check if input number is between 1-9
let number = parseInt(prompt('Enter a number between 1 and 9'))
//use while loop to recollect the number if the number is not between 1-9
while (number < 1 || number > 9) {
    number = parseInt(prompt("ERROR: Please Try again \n Enter a number between 1-9"))
}
console.log(`The collected number is ${number}`)

console.log('\n ----- Example 9: simulate a bank transaction -----')
let balance = 1000
while (true) {
    let user_transaction = parseInt(prompt("How can I help you today? \n Press 1 for account balance\n Press 2 for deposit \n Any Other Number to exit"))

    if (user_transaction < 1 || user_transaction > 2) {
        console.log('Thank you for visiting QCC Bank!')
        break
    }

    switch (user_transaction) {
        case 1:
            console.log(`Your balance is $${balance}`)
            break
        case 2:
            let deposit = parseInt(prompt('How Much do you want to deposit?'))
            if (deposit > 0) {
                balance += deposit
                console.log(`Your new Balance is ${balance}`)
            } else {
                console.log('Error! Invalid amount')
            }
            break
    }
}

console.log("------------ Exercise A ---------")

let num = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]

let sumNegatives = 0
let sumPositives = 0

for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        sumNegatives += num[i]
    } else if (num[i] > 0) {
        sumPositives += num[i]
    }
    // if it's 0, do nothing
}

console.log(`Sum of all negative numbers = ${sumNegatives}`)
console.log(`Sum of all positive numbers = ${sumPositives}`)

console.log('------------ Exercise B ---------')

// preset correct pin
let pin = 1234 
let attempts = 0 

while (true) {
    let user_pin = parseInt(prompt("Enter your 4-digit PIN:"))

    if (user_pin === pin) {
        console.log("✅ Welcome to your account!")
        break
    } else {
        attempts++
        console.log(`❌ Incorrect PIN. Attempts used: ${attempts}`)

        if (attempts >= 3) {
            console.log("🔒 Account locked due to too many failed attempts.")
            break
        }
    }
}
