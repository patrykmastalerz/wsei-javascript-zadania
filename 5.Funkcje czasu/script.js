//Zadanie 1

let counter = 0;

let intervalId = setInterval(function(){
    
  console.log("Cześć po raz: " + counter);
    counter++;
    if(counter === 15)
      clearInterval(intervalId);
}, 3000)


//Zadanie 2

exampleArray = [1,2,3,4,5,6];

setTimeout(function() {
  
  console.log(exampleArray);
  let counter = 0;

  let intervalId = setInterval(function() {
    console.log(exampleArray[counter]);
    counter++;

    if (counter === exampleArray.length) {
      clearInterval(intervalId);
    }

  }, 3000);
}, 2000);