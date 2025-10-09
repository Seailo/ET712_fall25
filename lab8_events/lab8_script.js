/**
 * Andrew Murray
 * Lab 8 Events 
 * 10/07/2025
 */
console.log('Andrew Murray')
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContext== "PRESS ME!"){
        e.target.textContext="Key was pressed"
}
else{
    e.target.textContext ="PRESS ME!"
}
//togle between classes in css
btnpressme.classlist.toggle("btnactive")
})






/**prevent default  */
const qcclink= document.querySelector(".qcclink")
qcclink.addEventListener("click",function(e){
    e.preventDefault()
    alert("QCC website is under maintenance")
})
/** Window Events*/
let btnscrollby= document.querySelector(".btnscrollby")
let content= document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(200,0)

})
/**photo gallery scrolling */
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")
//define a function to scroll the gallery by an image size
function scrollGallery(pixels){
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior:"smooth"
    })
}
//add event to each button
btnright.addEventListener("click",function(){
    scrollGallery(500)
})
btnleft.addEventListener("click",function(){
    scrollGallery(-500)
})