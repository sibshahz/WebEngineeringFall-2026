// variables
const variableName = "John"; // this is a variable cannot be re assigned
// variableName = "Doe"; // this is wrong

let otherVariable = "Hello"; // this is a variable can be re assigned
otherVariable = "World"; // this is correct

const myArray = [1, 2, 3]; // this is a constant array
myArray.push(4); // this is correct, we can modify the contents of the array
// myArray = [5, 6, 7]; // this is wrong, we cannot reassign the array

const someObject = {
  name: "John",
  age: 30,
  isVIP: true,
}; // this is a constant object

someObject.isVIP = false;

// someObject = {
//   name: "Doe",
// }; // this is wrong, we cannot reassign the object
// someObject.introduce();

const objKeys = Object.keys(someObject);

// functions

function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

const greetArrowShort = (name) => `Hello, ${name}!`;

// namesless functions

setInterval(greetArrow, 1000);

setInterval(function () {
  console.log("This is a namesless function");
}, 2000);

setInterval(() => {
  console.log("This is a namesless arrow function");
}, 3000);
