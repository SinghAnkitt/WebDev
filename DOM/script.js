
// Selection of an element
var a  = document.querySelector("h1")
console.log(a)

// Changing HTML
var b = document.querySelector("h1")
a.innerHTML = "Ankit Singh"

//Changing CSS
a.style.color = "red"
a.style.backgroundColor = "black"

// Event Listener
a.addEventListener("click",function(){
    console.log("Hey")
})

var c = document.querySelector("h1")
c.addEventListener("click",function(){
    c.innerHTML = "Change is compulsory"
    c.style.color = "yellow"
    c.style.backgroundColor = "black"
})