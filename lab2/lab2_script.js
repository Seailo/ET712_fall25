console.log("lab 2 by Andrew Murray")
console.log("/n ------ Example 1: Array------")
// create and initialize an array 
let fruits =["apple","orange","grapes","kiwi","pineapple"]
console.log(`The 3rd fruit =${fruits[2]}`)
console.log(`There is/are ${fruits.length}`)
// Remove the 1s5 element in arraty of fruits
console.log(`original array${fruits}`)
fruits.shift()
console.log(`remove the 1st element in array of freuits`)
// Add elements to the array
fruits.unshift(25,'Mango', true)
console.log('Updated array with three new elements = ${fruits}')
//add elements to the end right of array 
fruits.push('peter 100 ')
console.log(`Updated array with two new elements to the right =${fruits}`)
//find the indexof the element
let index_blueberries = fruits.indexOf("blueberries")
console.log(`What is the index of blueberries? ${index_blueberries}`)
//if the return index -1 ,then the element doesn't exist in the array
let index_PETER = fruits.indexOf('PETER')
console.log(`what is the index of PETER ${index_PETER}`)
console.log('/n -------Example 2: if statement ------')
//if statement is used to check if the condition statement is TRUE. If it is TRUE, then the program will run the lines in between the curly braces
let day = true 
let night = false
//checkif it is day time 
if(day){
    console.log('Good Morning')
}
console.log('END')

let n1 = 10
let n2 = '10'

console.log('/n ------- Example 3: If statement with logical operators ------')
//check if n1 is equal to n2
if (n1===n2){
    console.log(`n1 is equal to n2 ${n1===n2}`)
}
console.log ('End 2')
//check isf n1 is exactly equal to n2 
if(n1===n2){
    console.log(`n1 is exactly equal to n2 --> ${n1===n2}`)
}

console.log('END3')

console.log('/n ------Example 4: check if a number is even odd ------')
//if-else check two conditions

let number = 10 
if(number %2 ===0){
    console.log(`${number} is EVEN`)
}
else{
    console.log(`${number} is ODD`)
}

console.log('/n ------ Example 5: check if an input is a string or a number ------')
let user_inputq = prompt('enter a username')
let check_username = isNaN(parseFloat(user_inputq))
console.log(`${user_inputq} is not a number?${check_username}`)
if(check_username){
    console.log(`${user_inputq} is a String`)
}
else{
    console.log(`${user_inputq} is a NUMBER`)
}

console.log('/n ------ Example 6: Multiway Conditional Statement ------')

let num1 = 9
let num2 = 20
if(num1 === num2){
    console.log(`num1 is exactly equal to num2`)
}
else if(num1>num2){
    console.log('num1 is Greater Than number 2')
}
else if (num1<num2){
    console.log('num1 is Less than num2')
}
else{
    console.log('ERROR:unable to compare')
}

console.log('/n ------ Example 7: Switch Statement ------')
let gender = prompt('Enter a Gender Please')
switch(gender){
    case'Female':
    console.log('Selected Gender = Female')
    break
    case 'Male':
    console.log('Selected Gender = Male')
    break
    case "Other":
        console.log('selected gender = Other')
        break
    default:
        console.log('ERROR: unable to read the selected gender')
}

console.log('\n-------Exercise 1-------');

let users_number = Number(prompt('Please enter a number'));

if (isNaN(users_number)) {
    console.log(`That is a String`);
} else if (users_number > 0) {
    console.log(`${users_number} is a Positive number`);
} else if (users_number < 0) {
    console.log(`${users_number} is a Negative number`);
} else if (users_number === 0) {
    console.log(`${users_number} is zero`);
}

console.log('\n-------Exercise 2 -------');

let colors = ["red", "green", "orange", "olive", "magenta"];
let user_input = prompt("Enter a color");

//use lower method tochnge everything into a lower case 

// use indexOF method to check if the user_color exits in array colors

//switch to print the result 

let user_color = user_input.toLowerCase();

switch (user_input) {
    case 'red':
    case 'Red':
    case 'RED':
        console.log('You selected Red (found in the list).');
        break;
    case 'green':
    case 'Green':
    case 'GREEN':
        console.log('You selected Green (found in the list).');
        break;
    case 'orange':
    case 'Orange':
    case 'ORANGE':
        console.log('You selected Orange (found in the list).');
        break;
    case 'olive':
    case 'Olive':
    case 'OLIVE':
        console.log('You selected Olive (found in the list).');
        break;
    case 'magenta':
    case 'Magenta':
    case 'MAGENTA':
        console.log('You selected Magenta (found in the list).');
        break;
    default:
        console.log(`${user_input} is NOT in the colors list.`);
}
//use lower method tochnge everything into a lower case 

// use indexOF method to check if the user_color exits in array colors

//switch to print the result 