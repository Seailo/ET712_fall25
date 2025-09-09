/*
Andrew Murray
lab 4, functions
Sept 9, 2025
*/
console.log('Andrew Murray')

//define a function to print a message

function msg(){
    console.log('------- Example 1 --------')
    console.log('Hello World!')
}
//define a function to print from 3 to 1 
function printCornt(){
    console.log("------ Example 2 -------")
    for (let n =3; n>0;  n--){
        console.long(n)
    }
}

//define a function that passed a username 
function greeting(username){
    console.log("------ Example 3 ------")
    console.log(`Welcome to JS ${username}`)
}
//define a function passes a username and print it in uppercase
function Message(username){
     console.log ('----- Example 4 -----')
    let changeUpper= MessageChannel.toUpperCase
    console.log(changeUpper)
}
function isSnakeEyes(dice1, dice2){
console.log('------ Example 5 -----')
if(dice1===1 && dice2 ===1){
    console.log("SnakeEyes!")
}
else{
    console.log("Not Snake Eyes!")
}
}
//define a function that returns the area of a rectangle 
function areaRectangle(lenght, width){
    console.log("------ Example 6 -------")
    return lenght*width
}
//define a function to check a tempreature. If the temeperature is greater than 75 retuns 'true' otherwise it returns a 'false'
function checkTemperature(temperature){
    console.log("----- Example 7 ------")
    if (temperature>=75){
        return true
    }
    else{
        return false
    }
}

//Exercise
/* check name that validates a name and  console a greeting 
function checkname will handle situation that happens if user 
clicks on cancel in the dialog box / the prompt box  and if the user enters in a number or not a text at all within the prompt box 
all of these actions will be covered by the following
*/ 

function checkname(){
console.log('------ Exercise -------')
let name = prompt ('Please Enter Your Name')
let check_name = isNaN(parseFloat(name))

if(check_name){
    console.log(`Welcome ${name} to the class!`)

else if (check_name = null)
    console.log(`${name} is not a name`)
}
}
else
    console.log(`${name} is not a a name`)
}

