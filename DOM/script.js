// accessing paragraph using getElementById()

let para = document.getElementById("para");

// set or get element text using innerHTML property
para.innerHTML = "This is DOM Tutorial";

// using js chaining
document.getElementById("para").innerHTML = "This is DOM Tutorial";

// do the same thing using getElementByTagName()
let p = document.getElementsByTagName("p");
console.log(p);

/** Query Selector */ //tagname p #para1
let para1 = document.querySelector(".para"); // returns only the first matching element
// console.log(para1)



/** Query SelectorAll */

let para2 = document.querySelectorAll(".para"); // return nodelist object
console.log(para2); // contain collection of nodes

// accessing nodes using index number
para2[0].innerHTML = "Paragraph";


/** Styling Element */
// Element.style.styleproperty = "value";

// let sub = document.querySelector(".submit");
// console.log(sub);

// // stylin properties are case-sentive
// sub.style.backgroundColor = "Black";

// sub.style.color = "white";
// sub.style.fontSize = "3em";
// sub.style.padding = "1.5em";

let sub = document.querySelector("input[type=submit]");

// add class using add() method
sub.classList.add("submit");


/** Create New DOM Element */

// create two paragraph
let p1 = document.createElement("p");
let p2 = document.createElement("p");

// specify some demo text
p1.textContent = "First Paragraph";
p2.textContent = "Second Paragraph";

// append paragraph to the DOM using appendChild()
const content = document.querySelector(".content");
content.appendChild(p1);
// content.appendChild(p2);

// append paragraph to the body
document.body.appendChild(p2);

/** Specify Arrtibute using setAttribute() Method */
p1.setAttribute("class", "para1");

// remove attribute using removeAttribute()
p1.removeAttribute("class");


/** Data Attribute */
let nav = document.querySelectorAll(".navbar");

// getAttribute() method
console.log(nav[0].getAttribute("data-number"));
console.log(nav[1].getAttribute("data-name"));

// using dataset property
console.log(nav[0].dataset.number);
console.log(nav[0].dataset.name);


/** className Property */
let toggle = document.querySelector(".toggle");

// create an annonymous function
let color = function(flag){
    if(flag){
        toggle.className = "toggle_in";
    } else{
        toggle.className = "toggle_out";
    }
};

color(false);


/** Events */
// click
function display(){
    document.querySelector(".para2").innerHTML = Date();
}

// using addEventListener
document.querySelector(".btn").addEventListener("click", function(){
    // document.querySelector(".para2").innerHTML = "Using EventListener() Method";
    // style paragraph
    document.querySelector(".para2").style.fontSize = "3em";
    document.querySelector(".para2").style.color = "tomato"
});


/** Focus and Blur Event */
let form = document.getElementById("form");
form.addEventListener("focus", function(event){
    // event.target
    event.target.style.background = "lightblue";
}, true);

// create Blur event
form.addEventListener("blur", function(event){
    event.target.style.background = "";
}, true);