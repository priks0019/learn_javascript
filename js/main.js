// variables in javascrpipt

// var, let and const

// var has the global scope in the programm
// and the let or const have the block level scope
/*
const age = 10;

console.log("your age is: " + age);
function demo() {
  var name = "prikshit";
  console.log("age in the function: " + age);
  console.log("name is : " + name);
}
demo();
function demo2() {
  let name = "prikshitthakur";
  console.log("age in the function: " + age);
  console.log("name in second function: " + name);
}
demo2();

// data types in the java script

// strings, number, null, undefined, boolean

let Name = "Prikshit, Thakur";
let age = 24;
let isCool = true;
let relation = null;
let complicated = undefined;
let address;

console.log(Name);
console.log(age);
console.log(isCool);
console.log(relation);
console.log(complicated);
console.log(address);

// to check the type of the variable's

console.log(typeof Name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof relation);
console.log(typeof complicated);
console.error(typeof address); // thi is used to display the error


// concatination of the strings
console.log("Hello my name is " + Name + " and i'm " + age + " years old");
//  in ES6 new property is introduced for the  concatination
// Template strings (in this we use `backticks`)
console.log(`Hello my name is ${Name} and i'm ${age} years old.`);
//  OR
let detail = `Hello my name is ${Name} and i'm ${age} years old.`;
console.log(detail);

//string method
//toUpperCase, toLowerCase, string.length, split()

console.log(Name.length); //it will give us the length of the  string
console.log(Name.toUpperCase()); // it will convert the string into the upper case
console.log(Name.toLowerCase()); // it will convert the string into the lower case
console.log(Name.split("")); // it will take the string as the array


//Arrays in javasript and array methods
// javascript allows us to add different types of value in the array
// it may be number string booleans etc.

 indexOf
    push()
    pop()               //Array methods
    unshift()
    shift()
  array.isArray
const fruits = ["mango", "pears", "cherry"];

fruits[0] = "grapes";
// this method will be used when we have limited no. of value
fruits.push("strawberry");
// this will be usedto add item in the last of the array
fruits.unshift("mangos");
//this is used to add the item in the beginning of the array
fruits.shift(); // it delete the item from the begining
fruits.pop(); //it delete the itemn from the last
console.log(fruits);
console.log(fruits.indexOf("pears"));
 //it will check the index of the item in array


//Object Literals
const details = {
  Name: "Prikshit Thakur",
  age: 24,
  education: ["+2", "diploma", "B.tech"],
  address: {
    vill: "nalwari",
    distt: "mandi",
    state: "himachal Pradesh", // nested object
  },
};
console.log(details.Name);
console.log(details.education[2]);
console.log(details.address.distt);
details.email = "prikshit2230@gmail.com";
console.log(details);



//  Todo
const todo = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
  {
    id: 4,
    text: "I'm cool",
    isCompleted: true,
  },
];

//  to display or to send file to the server by using Json.stringfy
const todojson = JSON.stringify(todo);
//when data to be a web server, the data has to be a string
// the JSON.stringfy is used to  convert the java script object into the string
console.log(todojson);


// For
for (let i = 0; i < todo.length; i++) {
  console.log(todo);
}
i = 0;
while (i < todo.length) {
  console.log(todo[1].text);
  i++;
}

// for of loop
for (let todos of todo) {
  console.log(todos.text);
}

//for each loop
todo.forEach(function (todos) {
  console.log(todos.id); // it will give us the all items from the array through function
});
// map and filter
//map will return new array
const todoText = todo.map((todos) => {
  return todos.text;
});
console.log(todoText);
// filter will retrun new array on given consitions
const todoIsCompleted = todo
  .filter((todos) => {
    return todos.id === true;
  })
  .map((todos) => {
    return todo.text;
  });
console.log(todoIsCompleted);

const x = "20";
if (x === 20) {
  console.log(typeof x);
}

// ternary operator (?) -> it means "then" (:) --> it means else
const a = 20;
let color = a < 10 ? "red" : "blue";
console.log(color);
// switch statement
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red and blue");
}


// function's
function myFunction(a, b) {
  //simple function which are used in many languages
  console.log(a + b);
}
myFunction(89, 687);

// arrow functions
const add = (a, b) => {
  console.log(a + b); 
  // this is an arrow functions which do not use function keyword
};
add(896, 6457);


//Object Oriented programming

// constructor function
function Details(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
   this.getBirthYear = () => {
    return this.dob.getFullYear();
  };
  this.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}
Details.prototype.getBirthYear = () => {
  return this.dob.getFullYear();
};
Details.prototype.getFullName = () => {
  return `${this.firstName} ${this.lastName}`;
};

//class
class person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // by using calss is very easy and understandable methods
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//instantiate the object
let person1 = new person("prikshit", "thakur", "06/05/1998");
// let person2 = new person("priks", "thakur", "05/06/1998");
console.log(person1);
console.log(person1.getFullName());
console.log(person1.getBirthYear());


// DOM => Document Object Model


// console.log(window);
// alert(window); // used for the alert at the begining of the window

//single element

// const form = document.getElementById("myForm");
// console.log(form);

// and
console.log(document.getElementById("myForm"));
// by getElementById we can only select the Id's of the html documnet
// but by using the QuerySelector we can select the specific class, tags, and other things
console.log(document.querySelectorAll(".container-fluid"));
// it will give us the node-list which consists all .container-fluid
console.log(document.getElementsByClassName("form-control"));
//it only selct the class
console.log(document.getElementsByTagName("label"));


//multiple element
const item = document.querySelectorAll(".item");

item.forEach((item) => console.log(item));

const ul = document.querySelector(".items");

// ul.remove(); // to remove the element remove() will be used
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello"; // it will change the value at the first element in the list
ul.children[1].innerText = "i'm prikshit"; // it will used to change the value of the element by specifying there index
ul.lastElementChild.innerHTML = "<h1>I'm Cool</h1>"; // .innerHTML provide us to add the html tags with the javascript file

const btn = document.querySelector(".btn");
btn.style.background = "red";
btn.addEventListener("click", (e) => {
  e.preventDefault(); // for prevent the behaviour of the button
  document.querySelector("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1> I'm Cool</h1>";
});

function myfunction() {
  console.log(Name);
  let Name = "hello my name is prikshit";
}

let n = 65;
function add(num) {
  let sum = num + num;
  console.log("the sum is " + sum);
}
add(n);
add(685);
*/
// console.log(a);
// var a = 20;
// let d = 10;
// const b = 100;
// let and const keyword has to be initialise and declare first and then we can call them or access them
// let key word had strict rule but we can initialize before declaration
/* example:   
    let b;
    b =2000; // this is possible but in case of the const this is not possible

    const c;
    c=78.952;
    //this will give us the sysntax error at the window
    const c=89522.465; // this is the correct way to initialize the const


    console.log(c); // this is in the temporal dead-Zone if we want to hoisting the const and let they put an error
    const c =2031;

  
function sum() {
  var c = 203;
  return function add() {
    console.log(c);
  };
}
var z = sum();
console.log(z);
z();

const arr = [5, 6, 7, 2, 6];

// arr=[10, 12, 16, 4, 12]
// arr=[15, 36, 48, 12, 36]
// arr=[101, 110, 111, 010, 110]

//we use here the map functions to map the array in different form

function double(a) {
  return a * 2;
}
function triple(b) {
  return b * 3;
}
function binary(c) {
  return c.toString(2); // toString(2) method will be used to convert the digit into the binary
}

const arr1 = arr.map(double);
const arr2 = arr.map(triple);
const arr3 = arr.map(binary);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// map function will be used to modify the array element and
// we want to change the array element to greater and smaller

// filter() method will be use to change the value of the
// array on given condition if the condition will satisfied then the filter will will be work
function isEven(c) {
  return c % 2 == 0;
}

const arr4 = arr.filter(isEven);
const arr5 = arr.filter((c) => {
  return c < 4; // we can add function as a value in the function
});
console.log(arr4);
console.log(arr5);

//reduce in array
// used to find sum and max or min value in the array
// the reduce function will hold the two value / parameter's
// 1st we have the function and the second is the accumulator starting value
const output = arr.reduce(function (acc, curr) {
  return (acc = acc + curr); // acc -> represent the value of the accumulator
  // and the curr -> will represent the value of the current value
}, 0);
console.log(output);

const output2 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max; // to find the max value of the array
}, 0);
console.log(output2);


const users = [
  { firstName: "prikshit", lastName: "thakur", age: 24 },
  { firstName: "mark", lastName: "hole", age: 54 },
  { firstName: "pr", lastName: "thakur", age: 26 },
  { firstName: "mark", lastName: "ho", age: 34 },
];
*/
const output = users.filter((x) => x.age < 40).map((x) => x.lastName);
console.log(output);
