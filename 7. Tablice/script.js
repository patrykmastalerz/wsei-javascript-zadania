//zadanie 1

const exampleArray = ["jeden", "dwa", "trzy"];
exampleArray.forEach(item => {
  console.log(item);
})


//zadanie 2

const exampleArray = ["jeden", "dwa", 3, 5, "trzy", 1, "cztery"];
// 2.1. Pierszy i drugi element
console.log(exampleArray[0]);
console.log(exampleArray[1]);


// 2.2. Ostatni element

console.log(exampleArray[exampleArray.length - 1]);


// 2.3. Wszystkie elementy

exampleArray.forEach(item => {
  console.log(item);
})


// 2.4. Co drugi element

const newArray =  exampleArray.filter((x,i) => {
   return i % 2;
  })
console.log(newArray);


// 2.5. Wszystkie stringi

const newArray =  exampleArray.filter( x => typeof x === "string");
console.log(newArray);


// 2.6. Wszystkie numbery 

const newArray =  exampleArray.filter( x => typeof x === "number");
console.log(newArray);


//zadanie 3

let numbersArray = [1,2,3,4,5,6,7,8,9]; 


// 3.1. sumę wszystkich elementów

let sumOfNumbers= numbersArray.reduce((i,x) => i + x);
console.log(sumOfNumbers);


// 3.2. różnicę wszystkich elementów

let differenceOfNumbers= numbersArray.reduce((i,x) => i - x);
console.log(differenceOfNumbers);


// 3.3. średnią wszystkich elementów

let average = numbersArray.reduce((i,x) => i + x)/numbersArray.length;
console.log(average);


// 3.4. elementy parzyste

let evenNumbers = numbersArray.filter( item => item % 2 === 0);
console.log(evenNumbers);


// 3.5. elementy nieparzyste

let oddNumbers = numbersArray.filter( item => item % 2 );
console.log(oddNumbers);


// 3.6. największą liczbę

let max = 0;
for (let i = 0; i < numbersArray.length; i++){
    if (max <= exampleArray[i]){
        max = exampleArray[i];
    }
}
console.log(max);

// 3.7. najmniejszą liczbę

let min = exampleArray[0];
for (let i = 0; i < exampleArray.length; i++){
    if (exampleArray[i] < min){
        min = exampleArray[i];
    }
}
console.log('min: ', min)


// 3.8. wypisz tablicę od tyłu

let reversedArray = numbersArray.reverse();
console.log(reversedArray);


//zadanie 4

let numbersArray = [1,2,3,4,5,6,7,8,9];

function sumOfArrayNumbers (array){
  let sum = array.reduce( (x,i) => x+i );
  console.log(sum);
}
sumOfArrayNumbers(numbersArray);


//zadanie 5

let numbersArray = [1,2,3,4,5,6,7,8,9];

function multiplyArrayByAverage (array){
    let sum = array.reduce((x,i) => x+i);
    let average = sum/array.length;
  
    array.forEach(item => {
        console.log(item * average);
    })
  
}
multiplyArrayByAverage(numbersArray);


//zadanie 6

let numbersArray = [1,2,3,4,5,6,7,8,9];
function averageOfEvenNumbers(array) {
  let evenNumbers = array.filter(item => item % 2 === 0);
  let sumEvenNumbers = evenNumbers.reduce((i, x) => i + x);
  let average = sumEvenNumbers/evenNumbers.length;
  
  return average
}

let average = averageOfEvenNumbers(numbersArray);
console.log(average);


//zadanie 7 

let numbersArray = [4,2,8,1,7,4,11];

function sortArray(array) {
 return array.sort( (x, y) => x - y);

}

let sortedArray = sortArray(numbersArray);
console.log(sortedArray);

// const func = (arr) =>{
//   var done = false;
//     while(!done){
//         done = true;
//         for(var i =1; i<arr.length;i++){
//             if(arr [i-1] > arr[i]){
//                 done = false
//                 var temp = arr[i-1];
//                   arr[i-1] = arr[i]
//                 arr[i] = temp
//             }
//         }
//     }
//     console.log(arr)
// }


//zadanie 8


let array1 = [4,2];
let array2 = [1,3,"g"]

function sumIndexTabs(array1, array2){
  const result = array1.concat(array2);
  console.log(result);
  return result;
}
sumIndexTabs(array1, array2)

//zadanie 9

let numbersArray = [4,2,8,1,7,4,11];

function deleteItemOfArray(array, element) {
  let newArray = array.filter(item => item !== element);
  return newArray;

}
let newArray = deleteItemOfArray(numbersArray,11);
console.log(newArray);


//zadanie 10

let numbersArray = [4,-2,8,1,-7,4,11];

function reverseNumber(array){
  let newArray = array.map(item => -item);
  return newArray;

}

reverseNumber(numbersArray);