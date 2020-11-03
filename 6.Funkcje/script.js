// zadanie 1

function showSomething(){
    console.log("Udało się!")
}
  
showSomething();


//zadanie 2

const hello = "Witam serdecznie";

function displayArgument(element) {
  console.log(element)
}

displayArgument(hello);


//zadanie 3

const exampleArray = ["bla", "add", "fsa"];

function returnArray(array) {
  return array;
}

returnArray(exampleArray);

//zadanie 4

const exampleString = "Przykład";


function displayString(example){
    let counter = 0;
    let intervalId = 0;
    
    let intervalId = setInterval(() => {
        console.log(example);
    
        counter++;
    
        if (counter === 5) {
          clearInterval(intervalId);
          return console.log("Koniec");
        }
    }, 3000);
};

