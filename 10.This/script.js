//zadanie 1 i zadanie 2

class Person{
    constructor(name, lastname, age, country, city, meals = []){
        this.name = name,
        this.lastname = lastname,
        this.age = age,
        this.country = country,
        this.city = city;
        this.meals = meals;
    }

    displayPersonDetails() {
        console.log(this.name, this.lastname, this.age, this.country,  this.city);
    }

    addOneYear(){
        this.age++;
    }
}

const marek = new Person('Marek', 'Nowak', 10, 'Poland', 'Warszawa', ["Bekon", "ser"]);
const arek = new Person('Arek', 'Kowal', 15, 'Rosja', 'Moskwa', ["rosol", "czekolada"]);
console.log(marek.age);
console.log(arek.age);

marek.addOneYear();
console.log(marek.age);

arek.addOneYear();
console.log(arek.age);

Person.prototype.displayMeals = function() {
    console.log(this.meals);
}

Person.prototype.addMeal = function(meal) {
    this.meals.push(meal);
}

marek.displayPersonDetails();
marek.addMeal("Stek");
marek.displayMeals();


// Zadanie 3

const calculator = {
    setNumbers(number1, number2) {
      this.number1 = number1;
      this.number2 = number2;
    },

    sum() {
      console.log(this.number1 + this.number2);
    },

    subtract() {
      console.log(this.number1 - this.number2);
    },

    multiply() {
      console.log(this.number1 * this.number2);
    },

    divide() {
        if(this.number2 === 0) {
            console.log("nie mozna dzielic przez 0");
            return;
        }
  
      console.log(this.number1 / this.number2);
    }
  };

  calculator.setNumbers(10,0);
  calculator.sum();
  calculator.subtract();
  calculator.multiply();
  calculator.divide();

  //zadanie 4

  class LadderSimulator{
    constructor(height){
        this.height = height;
        this.position = 0;

    }

    displayPosition(){
        console.log(this.position);
    }

    goUp(steps) {
        for (let i = 0; i < steps; i++) {
            if(this.position > this.height) {
                console.log("Nie mozesz pojsc wyzej!");
                return;
            }
            
            this.position++;
            
        }
        console.log("Jestes na:" + this.position);
    }

    goDown(steps){
        for (let i = 0; i < steps; i++) {
            if(this.position < this.height) {
                console.log("Nie mozesz pojsc nizej!");
                return;
            }
            
            this.position--;
            
        }
        console.log("Jestes na:" + this.position);
    }

  }

const ladder = new LadderSimulator(50);
ladder.displayPosition();
ladder.goUp(5);
ladder.goUp(15);
ladder.goDown(6);






