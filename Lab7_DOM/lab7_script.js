/**
 * Andrew Murray 
 * Lab7 Intro To DOM
 */
console.log('Andrew Murray')
//access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)
// access(select) element by class name
let desc= document.querySelector(".description")
console.log(desc)
//access(select) element by tag name
let heading1 = document.querySelector('h1')
console.log(heading1)
//access(select) all elements by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log('loop through each element in the node list')
for(let index=0; index<description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
}

// collect(select) the elements
let shape = document.querySelector('.shapeDivision')
let btn_square=document.querySelector('.btn_square')
let btn_circle= document.querySelector('.btn_circle')
let btn_rectangle =document.querySelector(".btn_rectangle")

// add an event to each button

btn_square.addEventListener("click", function(){
    shape.className ="square"
    shape.textContent="square".toUpperCase()
    shape.style.backgroundColor = "gold";
})

btn_circle.addEventListener("click", function(){
    shape.className="circle"
    shape.textContent='CIRCLE'
    shape.style.fontSize= "2rem"
    shape.style.backgroundColor = "grey";
})

btn_rectangle.addEventListener("click", function(){
    shape.className= "rectangle"
    shape.textContent='RECTANGLE'
    shape.style.backgroundColor = "indigo";
})

