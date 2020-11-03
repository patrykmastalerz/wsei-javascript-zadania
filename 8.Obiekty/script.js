//zadanie 1

let car = {
    name: 'Audi',
    model: "S3",
    age: 12,
};

console.log(car.name);
console.log(car.model);
console.log(car.age);


//zadanie 2

let car = {
    name: 'Audi',
    model: "S3",
    age: 12,
  
    changeName: function (name) {
      this.name = name;
    }
};

car.changeName("BeEmWe");
console.log(car.name);


//zadanie 3

let exampleArray = [1,2,3,4,5];

let calculator = {

    sum: 0,

    sumArray: function (array) {
    this.sum = array.reduce( (i, x) => {
      return i + x;
    })
  }

}

calculator.sumArray(exampleArray);
console.log(calculator.sum);


//zadanie 4
let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
  
};

Object.keys(car).forEach((item) => {
    console.log(item + ": " + car[item]);
  })


//zadanie 5
let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
    
    engine: {
      type: "petrol",
      name: "M52"
    }
};

Object.keys(car.engine).forEach((item) => {
    console.log(item);
  })


//zadanie 6
let car = {
    name: 'BMW',
    model: "E46",
    age: 12,
    
    engine: {
      type: "petrol",
      name: "M52"
    }
};

car.displayHello = function (){
  console.log("Hello")
}; 

car.displayHello();