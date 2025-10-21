console/log(`Andrew Murray`)
//collect the elements 
let myform =document.querySelector("#form1")
let username = document.querySelector("#username")
let greeting = document.querySelector(".greeting")
let displayusername= document.querySelector(".display_username")

// collect data within the form after submit button is pressed
myform.addEventListener("submit",function(event){
    //prevent the default form behavior
    event.preventDefault()

    //collect the data
    let usernameInput = document.querySelector("#username")
    let usernamevalue = usernameInput.value

    if (usernamevalue.trim() ===""){
        alert("Please a username")
        return;
    }

    //after the validation passes, the data is sent to the server
    //in html after the validation the greeting message will display witha  username
    greeting.style.display="block"
    displayusername.textContent= usernamevalue
    
   //clear the username field
    usernameInput.value = ""

    //submit the form after valiidation
    myform.submit()
})
let btnsubmit = document.querySelector(".btnsubmit")
window.addEventListener("load", function(){
    btnsubmit.disabled= true
})

let username_error_msg= document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("Input",function(){
    usernamevalue= usernameInput.value
    usernamevaluelenght =usernamevalue.length
    if(usernamevaluelenght >=5 && usernamevaluelenght<20){
        username_error_msg.textContent=""
        btnsubmit.disabled = false
        usernameInput.classList.add("active_input_valid")
    }
        else if(usernamevaluelength===20){
            username_error_msg.textContent ="username cant be 20+ characters"
        }
        else{
            username_error_msg.textContent="username must be between 5 and 20"
            btnsubmit.disabled = true
            usernameInput.classList
            usernameInput.classList

        }
    
})
/**
 * oct 21,2025
 */
//  collect the element
const inputpassword = document.querySelector("#password")
//add a focus event to the input 
inputpassword.addEventListener("focus",function(){
    event.classList.add()
})
//add a blur event to an input
inputpassword.addEventListener("focus",function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")
})

//shuf