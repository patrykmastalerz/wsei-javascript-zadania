// Zadanie 1

function Person(name, lastname, age, country, city, language){
    this.name = name;
    this.language = language;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
}

Person.prototype.changeAge = function (age) {
    this.age = age;
}


Person.prototype.changeCity = function (city) {
    this.city = city;
}

const marek = new Person("Marek", "Kowalski", 12, "Polska", "Gdansk", "Polski");
const wiktoria = new Person("Wiktoria", "Nowak", 23, "Rosja", "Moskwa", "Rosyjski");
const bogdan = new Person("Bogdan", "Ubranski", 32, "Ukraina", "Minsk", "Rosyjski");
const thomson = new Person("Thomson", "Gate", 33, "USA", "Hollywood", "Angielski");
const karolina = new Person("Karolina", "Mazurek", 42, "Czechy", "Praga", "Czeski");

marek.changeAge(9);
wiktoria.changeCity("Warszawa");

console.log(marek.age);
console.log(wiktoria.city);

// Zadanie 2

function Calculator(){
    this.result = 0;
    this.story = [];
}

Calculator.prototype.setResultAndStory = function(result) {
    this.result = result;
    this.story.push(result);
}

Calculator.prototype.add = function (a, b){
    this.setResultAndStory(a + b);
}

Calculator.prototype.subtract = function (a, b) {
    this.setResultAndStory(a - b);
}

Calculator.prototype.divide = function (a, b) {
    this.setResultAndStory(a / b);
}

Calculator.prototype.multiply = function (a, b) {
    this.setResultAndStory(a * b);
}

Calculator.prototype.getStory = function () {
    console.log(this.story);
}

Calculator.prototype.clearStory = function () {
    this.story = []
}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

calculator1.add(1,5);
calculator1.divide(50,2);
calculator1.getStory();
calculator1.clearStory();
calculator1.getStory();

calculator2.multiply(1,5);
calculator2.add(50,2);
calculator2.getStory();
calculator2.clearStory();
calculator2.getStory();

//zadanie 3

class ExampleClass {
    setRandomNumber() {
        ExampleClass.prototype.timeSetRandomNumber = setInterval(() => {
            ExampleClass.prototype.number = Math.round(Math.random()*10);
        }, 1000)

    }

    checkRandomNumber() {
        ExampleClass.prototype.timeCheckRandomNumber = setInterval(() => {
            if(ExampleClass.prototype.number > 5) {
                clearInterval(this.timeSetRandomNumber);
                clearInterval(this.timeCheckRandomNumber)
            }
        }, 1000)
    }
}

const exampleClass1 = new ExampleClass();
const exampleClass2 = new ExampleClass();
exampleClass1.setRandomNumber();
exampleClass2.checkRandomNumber();