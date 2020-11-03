// zadanie 1

let p1 = 2;
let p2 = 6;
if(p1>p2) {
    console.log(p1);  
} else if(p1==p2) {
    console.log("Sa rowne");  
} else {
     console.log(p2);  
} 


//zadanie 2

let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {

    console.log(firstNumber);

} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {

    console.log(secondNumber);
    
} else {
    console.log(thirdNumber);
}


//zadanie 3

var step;
for (step = 0; step < 10; step++) {

  console.log('Lubię JavaScript');
}

//zadanie 4

let result = 0;

for(let i = 1; i<=10; i++){
    result += i;
}

console.log(result);

//zadanie 5

for(let n = 0; n<5; n++){
    if(n%2 == 0){
        console.log(n + " parzysta");
        
    } else {
        console.log(n + " nieparzysta");
    }
}

//zadanie 6
for ( let i = 0; i < 5; i++) {

	for ( let j = 0; j < 5; j++) {

		console.log("i= " + i + ", j= " + j);

		}
	}


//zadanie 7

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

//zadanie 8

// a)

const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}

// b)

for (let i = 1; i <= 5; i++) {
    
    const tab = [];
    for (let j = i; j < 5; j++) {
      tab.push(" ");
    }
    for (let k = 0; k < (2 * i - 1); k++) {
      const value = k % 2 === 0 ? "*" : " ";
      tab.push(value);
    }
  
    const row = tab.join("")
    console.log(row);
}
  


// c)

for ( let i=1; i<= 5; i++ ){
    let empty = ' '.repeat( 5-i );
    let stars = '*'. repeat( 2*i-1 )
    console.log( empty + stars );
}


// d)

for(let i=1;i<=6;i++){
    let row = "";
    for(let j=0; j<i ;j++){
        row += "*";
    }

    let number = i;
    for(let k=6; k>i ;k--){
        row += number;
        number ++;
    }
    console.log(row);
    
}
console.log("------")
for(let i=6;i>0;i--){
   
    let row = "";

    for(let k=1; k<=i ; k++){
        row += "*";
    }
    let number = i
    for(let j=6; j>i ; j--){
      row += number;
       number++;
    }
    console.log(row);
}



// e

for (let i = 1; i <= 5; i++) {
    
    const tab = [];
    for (let j = i; j < 5; j++) {
      tab.push(" ");
    }
    for (let k = 0; k < (2 * i - 1); k++) {
      const value = k % 2 === 0 ? "*" : " ";
      tab.push(value);
    }
  
    const row = tab.join("")
    console.log(row);
}

for ( let i=1; i<3; i++ ){

    const tab = [];
    for (let j = 0; j < 4; j++) {
        tab.push(" ");
    }

    tab.push("*");
    const row = tab.join("");
    console.log(row);
}