/** setInterval() */
// setInterval(function, ms)

let para = document.querySelector(".count");
let count = 0, clear;

document.querySelector(".start").addEventListener("click", ()=>{
    clear = setInterval(valueCount, 1000)
});

document.querySelector(".stopp").addEventListener("click", ()=>{
    clearInterval(clear);
});

function valueCount(){
    count++;
    para.innerHTML = count;
}


/** setTimeout() Method */
// setTimeout(function, ms)

let clearr;

document.querySelector(".star").addEventListener("click", ()=>{
    clearr = setTimeout(alertMe, 3000);
});

document.querySelector(".stopp").addEventListener("click", ()=>{
    clearTimeout(clearr);
});

function alertMe(){
    alert("Your 3 seconds is over");
    document.querySelector(".alertpara").innerHTML = "Time Over";
}


