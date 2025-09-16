/**
 * Andrew Murray
 * Lab 5, more about functions, object
 * Sept 11, 2025
 */ 
 
console.log ('Andrew Murray')
// annonyumous functions within a variable
console.log ('------- Example 1 -------')
let greet = function(username){
    console.log(`Welcom to function ${username}`)

}
// arrow function
let greeting = function(username) {
    console.log(`Good afternoon ${username}`)
}

//EXAMPLE 2: default parameters
// randomly generated a number between 1 and 9 
// function will pass the amount of time that the number will be generated 
function rand_number(x){
    for (let n =1; n <=x; n++){
        let num = Math.ceil(math.random()*9)
        console.log(`${num}`)
    }   
}

//EXAMPLE 3: spread operator
// used to expand an array into individual elements 
// example: finding the maximum number in an array 
let
    numbers=[2,0,-10,5,8,-9]
    let max_number = Math.max(...numbers)
    console.log(`/n---Example 3: spread ----`)
    console.log(`The maximum number is = ${max_number}`)


    const car = {
        //Properties
        type: 'FIAT',
        model: '500',
        color: 'white',
        
    
    //method
     car_description: function(){
        return ` Car type = ${this.type} ${this.model} ${this.color}`
     }

    }
//Example 5
//create an object that will calculate the perimeter and or area of a rectangle
const myMath = { 
    // methods
    perimeter: function(w, l){
        return (2*w) + (2*l)},
    area: function(w,l){return w*l}
}
//Example 6
const cat= {
    //properties
    name: 'Mickey',
    color: 'Black with white spots',
    breed: 'unkown',

    //method
    meow: function(){console.log("MEOW MEOW MEOW")}
}

//Example 7
const hen ={
    //properties
    name: "Helen",
    eggCount:0,
    //method
    layAnEgg(){
        this.eggCount++
        return `${this.name} lays an EGG`
    },
    reseteggCount (){
        this.eggCount=0
        return `${this.name} egg count = ${this.eggCount}`
    }
}

//Example 8
try{
function yell (message=''){
    console.log(message.toUpperCase().repeat(3))
}
}
catch(error){
    console.log(error)
    console.log('please pass a string next time!')
}
finally{
    console.log('End of Program!')}



// Exercise 1
const myCalculator = {
    // properties
    message: "Cube calculations",
    side: 2,

    // methods
    area_square: function () {
        return Math.pow(this.side, 2);
    },
    volume_cube: function () {
        return Math.pow(this.side, 3);
    }
};

// test
console.log(myCalculator.message);
console.log("Side length = " + myCalculator.side);
console.log("Area of square = " + myCalculator.area_square());
console.log("Volume of cube = " + myCalculator.volume_cube());





// Exercise 2
function readProperty(obj, prop) {
    try {
        if (prop in obj) {
            return obj[prop];
        } else {
            throw new Error("Property not found");
        }
    } catch (error) {
        return "Error accessing property";
    }
}

// test
const vehicle = {
    type: "Fiat",
    model: "500",
    color: "White"
};

console.log(readProperty(vehicle, "type"));  // Fiat
console.log(readProperty(vehicle, "year"));  // Error accessing property

