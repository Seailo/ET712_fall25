/*
*ANDREW MURRAY
*lab3, loops
* Sept 4, 2025
*/
console.log("Andrew Murray")
console.log(`\n ------ Example 1: For Loop as a counter -------`)
//for loop to print from 0- to 5
for (let x =0; x <5; x++){
console.log(x)
}
console.log(`\n ------ Example 2: For Loop as a counter -------`)
let num = parseInt(prompt("Enter a number between 0 and 90"))
for(num; num<100; num++){
if(num%2===0){
console.log(num)
}
}
console.log(`\n ------ Example 3: for loop as decrement counter-------`)
//print numbers from 3 to 0 --> 3, 2,1,0
for (let x = 3; x >= 0; x --){
    console.log(x)
}
console.log(`\n ------ Example 4: For Loop in an array -------`)
let cars =['Mazda','BMW','Tesla','Jeep','Honda']
for(index =0; index<cars.length++){
    console.log(cars[index])
}
console.log("\n for loop using 'of' statement")
for(let each of cars[index]){
    console.log(each)
}
console.log(`\n ------ Example 5: Application using for loops -------`)
// find how many cars have 
for(let index = 0; index<cars.length;index++){
    if (cars[index].length > 4)

}
console.log(`There is ${car_counter} car's name with 4+ characters`)

console.log(`\n ------ Example 6: Application using for loops -------`)
// ask the user to guess number between 1 and 9 
let GUESS = 8
for(let counter = 1; counter <=3; counter++){
    let user_number = parseInt(prompt("Enter a number between 1 and 9"))
    console.log(`User guess = ${user_number}`)
    if(user_number === GUESS){
        console.log(`Great the number iis ${GUESS}`)
        break
    }
    else if(user_number>GUESS){
        console.log(`Wrong! The number should be lower`)
    }
    else if(user_number<GUESS){
        console.log(`Wrong! the number should be higher`)
    }
    if(counter===3){
        console.log(`better luck next time`)
    }
}
console.log(`\n ------ Example 7: while loop as a counter -------`)
// print from 0 - 5 
let y = 0 
while (y <=5){
    console.log(y)
    y++
}

console.log(`\n ------ Example 8: validate an input -------`)
// check if input number is between 1-9
let number = parseInt(prompt('Enter a number between 1 and 9'))
//use while loop to recollect the number if the number is not between 1-9
while(number<1 || number >9){
    number =parsent(prompt("ERROR: PLease Try again \n Enter a number between 1-9"))
}
console.log(`the collected number is ${number}`)

console.log('\n ----- example 8; simulate a bank transaction -----')
while(true){
    let balance = 1000
    user_transaction= parseInt(prompt("How can i help you today? \n Press 1 for account balance\n Press 2 for deposit \n Any Other Number to exit"))
    if (user_transaction < 1 || user_transaction <2){
        console.log('Thank you for visiting QCC Bank!')
        break 
    switch(user_transaction){
        case 1:
            console.log(`Your balance is $ ${balance}`)
            user_transaction
        case 2: 
        let deposit =parseInt(prompt('How Much do you want to deposit?'))
        if(deposit>0){
            balance += deposit
            console.log(`Your new Balance is ${balance}`)
        }

        else{
            console.log('Error! invalid amount')
        }
        break
    }
    }
}
console.log ('------------exercise a ---------')

console.log ('------------exercise b ---------')

// use the previous examples to create exercise b it is meant to be a pin number checker so create a let pin then make a attempter 
// make sure to give it 3 attempts in orer to guess the pin if all attempts are unsuccesful make it so that the account is locked 
// in order to complete this code you have to use 2 lets one while true statements then another let statement with a prompt if the pin doesnt match start a attempt counter with an if statemnt and if it is guessed correctly make an else to say welcome to account and if the other 3 attempts are failed make it so that the account gets locked.