conlose.log('Hello');
let Age = 25;
let Name = "Shabnam"
console.log(typeof Age);
console.log('Hello', 'World', '!');
console.log(`you are ${Age} years old!`);
document.getElementById("p1").textContent = Name;


//value => !value
//function(value) { return !value; }

//USER INPUT
// 1. Easy way= window prompt
let username;
username = window.prompt("Add a username");
console.log(username);

// 2. Professional way - HTML textbox
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}

// TYPE CONVERSION
let age = window.prompt("Enter your age");
age = +1;
console.log(age); //here age is a string so it will print 1 beside the input
age = Number(age);
age = +1;
//if u attempt to convert alphabetical characters to number it will give NaN
//converting string to Boolean will give true(except if it's an empty string or undefined variable)

/*Use == for loose comparisons (value-based).
Use === for strict comparisons (value and type-based).  */

// COUNTER PROGRAM
const decreasBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
decreasBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

//Random Number Generator
let randomNum = Math.random();

//checked property
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = "subscribed";
    }
    else {
        subResult.textContent = "not subscribed";
    }
    if (visaBtn.checked) {
        paymentResult.textContent = "payment done using visa";
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = "payment done using master card";
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = "payment done using payPal";
    }
    else {
        paymentResult.textContent = "payment not done";
    }

}
//ternary operator
let agE = 21;
agE >= 18 ? console.log("eligible") : console.log("not eligible");

//switch
let testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);

//string methods
let myName = "Shabnam";
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(0));
console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("a"));
console.log(myName.concat(" ", "is", " ", "a", " ", "good", " ", "boy"));
console.log([...myName].join("-"));
console.log(myName.trim());
console.log(myName.includes("am"));
console.log(myName.repeat(3));
console.log(myName.replace("Shabnam", "Shab"));
console.log(replaceAll("Shabnam", "Shab"));
console.log(myName.padStart(15, "*"));
console.log(myName.padEnd(15, "*"));
console.log(myName.slice(0, 3));
console.log(myName.slice(-3));
console.log(myName.split(""));
console.log(myName.split(""));
console.log(myName.startsWith("Sh"));
console.log(myName.endsWith("am"));

console.log(myName.substr(0, 2));
console.log(myName.substring(0, 2));
console.log(myName.includes("@"));
console.log(myName.slice(0, 2));
//array methods
let myArray = ["apple", "banana", "cherry"];

myArray.push("orange");
myArray.pop();
myArray.unshift("pineapple");
myArray.shift();
myArray.length;
myArray.reverse();
myArray.sort();
myArray.splice(1, 2);

//LOOPS

let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

const Arr = [1, 2, 3];
Arr.forEach(val => console.log(val));

const arry = [1, 2, 3];
const newArr = arry.map(val => val * 2);
console.log(newArr);

//spread operator = ...  used to expand an array or object into individual elements
//                  (unpack the elements)

//rest operator = ...  used to collect the remaining elements in an array or object
//                        (opposite of spread)
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);
let maximum = Math.max(...numbers);
console.log(maximum);


//   = assignment operator
//  == comparison operator(compares if values are equal)
// === strict equality operator(compare if values & datatypes are equal)
//  != inequality operator
// !== strict inequality operator

//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
let secretNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess;
let attempts = 0;
let guessLimit = 3;
let running = true;

while (running) {
    guess = prompt("Guess a number between 1 and 100");
    attempts++;
    if (guess === null || isNaN(guess)) {
        running = false;
    }
    else if (guess === secretNum) {
        alert(`You got it! It took you ${attempts} guesses`);
        running = false;
    }
    else if (attempts === guessLimit) {
        alert(`Game over! The secret number was ${secretNum}`);
        running = false;
    }
    else if (guess > secretNum) {
        alert("Too high! Try again");
    }
    else if (guess < secretNum) {
        alert("Too low! Try again");
    }
}

//temperature conversion program

const textBox = document.getElementById("textBox");
const toFaranheit = document.getElementById("toFaranheit");
const toCelsuis = document.getElementById("toCelsuis");
const result = document.getElementById("result");
let temp;
function convert() {

    if (toFaranheit.checked) {
        temp = parseFloat(textBox.value) * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsuis.checked) {
        temp = (parseFloat(textBox.value) - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    result.innerHTML = temp.toFixed(2) + "°" + (toFaranheit.checked ? "F" : "C");
}


//OBJECTS
const courses = {

    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};

const student1 = Object.create(courses);

student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
    console.log(courses);
}

for (let prop in student1) {
    console.log(prop + " -> "
        + student1[prop]);
}

//CONSTUCTORS

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Ford", "Mustang", 2020, "red");

//CLASS = (blueprint for creating objects) provides a more structured 
//        and cleaner way to work with objects compared to traditional constructor functions

class Person {

    static personCount = 0;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Person.personCount++;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    //when ur assigning values even when ur initially creating an object you can go through the setters for input validation
    set age(newAge){
        if(newAge > 0){
            this._age=newAge;
        }
        else{
            console.error("Age cannot be negative");
        }
    }
    //when u retrieve values annd try and read(access) them you can add additionnal getters
    get age(){
        return this._age;
    }

}

const person1 = new Person("Shabnam", "Nazarli", 17);

//INHERITANCE = allows a new class to inheritproperties
//              and methods from an existing class (parent -> child)
//              helps with code reusability


// super = keyword is used in classes to call the constructor or
//         access the parent class's properties and methods

class Animal {
    alive = true;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }

    move(speed) {
        console.log(`This ${this.name} is moving at ${speed} km/hr`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} is running`);
super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish();

console.log(rabbit.alive);
console.log(fish.alive);
rabbit.eat();
fish.eat();

//CALLBACKS
sum(displayConsole, 10, 20);
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

//.forEach = executes a provided function once for each array element

let myArr = [1, 2, 3, 4, 5];

myArr.forEach(triple);
myArr.forEach(display);

function display(element) {
    console.log(element);
}

function triple(element, index, array) {
    array[index] = element * 3;
}

//.map() = creates a new array from calling a function for every array element
const Numbers = [1, 2, 3, 4, 5];
const squares = Numbers.map(square);
const cubes = Numbers.map(cube);

console.log(cubes);

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

//filter() = creates a new array with all elements that pass a test

const numBers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numBers.filter(isEven);
console.log(evenNumbers);

function isEven(element) {
    return element % 2 === 0;
}

//.reduce() = reduces the array to a single value

const grades = [17, 50, 90, 65, 80, 95];
const Maximum = grades.reduce(getMax);

console.log(Maximum);

function getMax(element1, element2) {
    return Math.max(element1, element2);
}
