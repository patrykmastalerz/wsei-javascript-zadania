//zadanie 1
//1.1

document.querySelector("#test-event").addEventListener("click", e => {
    console.log(e);
});

//1.2

document.addEventListener("mousemove", e => {
    console.log(e);
})

//1.3

document.querySelector("#test-event").addEventListener("mouseover", e => {
    console.log(e);
});

//1.4

document.addEventListener("keypress", e => {
    console.log(e);
});
  
//1.5
  
document.addEventListener("scroll", e => {
console.log(e);
});
  
//1.6

  
document.querySelector("#input-test").addEventListener("input", e => {
console.log(e);
});


//zadanie 2

const span = document.querySelector("#span-ex2")

document.querySelector("#ex2").addEventListener("click", e => {
    span.innerHTML = e.target.getAttribute("data-text");
});
  
//zadanie 3

const redElement = document.querySelector("#ex3");

redElement.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "blue"; 
});

redElement.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "red";
});

//zadanie 4

const errorSpan = document.querySelector("#ex3-err");

document.querySelector("#input-test").addEventListener("input", e => {
    const input = e.target.value;
    var regex = /[0-9]/
    let text = "";


    if(regex.test(input)){
        text = "Nie mozna wpisywac liczb";
    } else {
        text = "";
    }

    errorSpan.innerHTML = text;
})

//zadanie 5
//nie było ex5 wiec dodałem

const button = document.querySelector("#ex5-button");
const element = document.querySelector("#ex5");
let counter = 0;

button.addEventListener("click", () => {
    counter++;

    element.innerHTML = counter;

    if(counter === 10 ){
        element.innerHTML = 0;
        counter = 0;
    }
})

//zadanie 6

window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }
});


//zadanie 7

const buttons = document.querySelectorAll("#calculator button");
const input = document.querySelector("#calculator input");

let calculation = "";

buttons.forEach( item => {
    item.addEventListener("click", () => {
        calculation += item.textContent;
        console.log(calculation);
        input.value = calculation;
    })
})

window.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        input.value = eval(calculation);
    }
})
