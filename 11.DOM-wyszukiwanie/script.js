//zadanie 1

const listsElements = document.querySelectorAll(".list");
console.log(listsElements);

//zadanie 2

const getElementByTag = (tagName) => {
    return document.getElementsByTagName(tagName);
  }
  
  const litsItems = getElementByTag("li");
  console.log(litsItems);

  
// zadanie 3 

const list = document.querySelector("#list");
console.log(list);


//zadanie 4

const displayElement = (element) => {
    console.log(element);
}

const liItems = document.querySelectorAll("li");
const ulItems = document.getElementsByTagName("ul");
const spansItems = document.getElementsByTagName("span");
const spansInDiv = document.querySelectorAll("div.list span");
const spansInDivWithId = document.querySelectorAll("div#spans span");

displayElement(liItems);
displayElement(ulItems);
displayElement(spansItems);
displayElement(spansInDiv);
displayElement(spansInDivWithId);
