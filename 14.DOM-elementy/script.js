//zadanie 1
const divs = document.getElementsByClassName("more-divs");

function getTags(elements) {
    const array = Array.from(elements);
    return array.map((item) => item.tagName);
}

console.log(getTags(divs));


//zadanie 2

const shortList = document.querySelector(".short-list");

function displayDetails(item) {
    console.log(item.innerHTML);
    console.log(item.outerHTML);
    console.log(item.className);
    console.log(item.classList);
    console.log(item.dataset);
}

displayDetails(shortList)

// Zadanie 3
const dataSetCheck = document.getElementById("datasetCheck")

function calculateParameters(el) {
    const data = document.querySelector("#datasetCheck");
    const elmentOne = Number(el.getAttribute("data-numberone"));
    const elmentTwo = Number(el.getAttribute("data-numbertwo"));
    const elmentThree = Number(el.getAttribute("data-number-three"));

    const sum =  elmentOne + elmentTwo + elmentThree;
    const diff = elmentOne - elmentTwo - elmentThree
    

    console.log("suma: " + sum )
    console.log("roznica: " + diff)
}

calculateParameters(dataSetCheck)


//zadanie 4

document.querySelector("#spanText").innerText = "przykladowy tekst";

//zadanie 5

document.querySelector("#spanText").className = "jakasClasa";

//zadanie 6

const elements = document.querySelector("#classes").classList;

function displayClasses(classes) {
    classes.forEach((name) => {
        console.log(name);

    });
    console.log(Array.from(classes.values()).join('+'));
}

displayClasses(elements)


//zadanie 7

const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })

}
const result = addAttributes(list);

//zadanie 8

function createObject(name) {
    return {newClass: name}
}


const addClass(obj) {
    const newClass = obj.newClass;
    document.querySelector("#myDiv").classList.add(newClass);

}

const sampleObj = createObject("string_z_parametru");
addClass(sampleObj);

//zadanie 9 

function addClassEvenOrOdd(number){
    const newClass = "";
    if(number % 2 === 0) {
        newClass = "even";
    } else {
        newClass = "odd";
    }
    document.querySelector("#numbers").classList.add(newClass);
}

addClassEvenOrOdd(Math.floor(Math.random() * 10));

//zadanie 10
const list = document.querySelector('#longList');

function getList(elements) {
    let text = [];
    elements.querySelectorAll("li").forEach((element) => {
        text.push(element.innerText);
    });
}

console.log(getList(list));

//zadanie 11
const list = document.querySelectorAll("#longList li");

const changeDataAndSetValues(elements){
    elements.forEach(   element => {
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = Math.floor(Math.random() * 10)
    })
}

changeDataAndSetValues(list);
