console/log(`Andrew Murray`)
//collect the elements 
let myform =document.querySelector(".myform")
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
    usernameInput.value = ""

    //submit the form after valiidation
    myform.submit()
})
let username_error_msg= document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("Input",function(){
    usernamevalue= usernameInput.value
    usernamevaluelength =usernamvalue.length
    if(20>=usernamevaluelength >=5){
        displayusername.style.textContent=""
    }
        else{
            displayusername.style.textContent="Username must be between 5 and 20 characters"
        }
    
})

