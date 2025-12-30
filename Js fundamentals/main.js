// 1. VARIABLES
// javascript
// // Declaration
// var oldWay = "not recommended"; // Function scope
// let modernWay = "recommended"; // Block scope, can be reassigned
// const constantValue = "cannot reassign"; // Block scope, cannot reassign
// 2. DATA TYPES
// javascript
// // Primitive Types
// let string = "Hello World";
// let number = 42;
// let boolean = true;
// let nullValue = null;
// let undefinedValue;
// let symbol = Symbol('unique');
// let bigInt = 9007199254740991n;

// // Reference Types
// let object = { key: "value" };
// let array = [1, 2, 3];
// let functionType = function() {};
// 3. OPERATORS
// javascript
// // Arithmetic
// let sum = 5 + 3;
// let difference = 10 - 4;
// let product = 6 * 7;
// let quotient = 20 / 4;
// let remainder = 10 % 3; // Modulus
// let exponent = 2 ** 3; // Power

// // Comparison
// 5 == "5"  // true (loose equality)
// 5 === "5" // false (strict equality)
// != and !== // Not equal
// >, <, >=, <= // Greater/less than

// // Logical
// && // AND
// || // OR
// !  // NOT

// // Assignment
// let x = 5;
// x += 3;  // x = x + 3
// x -= 2;  // x = x - 2
// x *= 4;  // x = x * 4
// 4. CONTROL STRUCTURES
// javascript
// // Conditionals
// if (condition) {
//     // code
// } else if (anotherCondition) {
//     // code
// } else {
//     // code
// }

// // Switch statement
// switch(value) {
//     case 1:
//         // code
//         break;
//     default:
//         // code
// }

// // Ternary operator
// let result = condition ? "true" : "false";
// 5. LOOPS
// javascript
// // For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // While loop
// while (condition) {
//     // code
// }

// // Do-while loop
// do {
//     // code
// } while (condition);

// // For...of loop (arrays)
// for (let item of array) {
//     // code
// }

// // For...in loop (objects)
// for (let key in object) {
//     // code
// }
// 6. FUNCTIONS
// javascript
// // Function declaration
// function greet(name) {
//     return `Hello ${name}`;
// }

// // Function expression
// const greet = function(name) {
//     return `Hello ${name}`;
// };

// // Arrow function (ES6+)
// const greet = (name) => `Hello ${name}`;

// // Parameters and arguments
// function multiply(a, b = 1) { // Default parameter
//     return a * b;
// }
// 7. ARRAYS
// javascript
// let fruits = ["apple", "banana", "orange"];

// // Common methods
// fruits.push("grape");     // Add to end
// fruits.pop();             // Remove from end
// fruits.unshift("mango");  // Add to beginning
// fruits.shift();           // Remove from beginning
// fruits.length;            // Get length
// fruits.indexOf("banana"); // Find index

// // Higher-order methods
// fruits.forEach(fruit => console.log(fruit));
// let upperFruits = fruits.map(fruit => fruit.toUpperCase());
// let filtered = fruits.filter(fruit => fruit.length > 5);
// 8. OBJECTS
// javascript
// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         return `Hello, I'm ${this.name}`;
//     }
// };

// // Access properties
// person.name;      // Dot notation
// person["age"];    // Bracket notation

// // Add/remove properties
// person.city = "New York";
// delete person.age;
// 9. STRING METHODS
// javascript
// let str = "Hello World";

// str.length;              // 11
// str.toUpperCase();       // "HELLO WORLD"
// str.toLowerCase();       // "hello world"
// str.indexOf("World");    // 6
// str.slice(0, 5);         // "Hello"
// str.replace("World", "JavaScript");
// str.includes("Hello");   // true
// 10. DOM MANIPULATION
// javascript
// // Selecting elements
// document.getElementById("id");
// document.querySelector(".class");
// document.querySelectorAll("p");

// // Modifying elements
// element.textContent = "New text";
// element.innerHTML = "<strong>Bold</strong>";
// element.style.color = "red";
// element.classList.add("new-class");

// // Events
// element.addEventListener("click", function(event) {
//     console.log("Clicked!");
// });
// 11. ERROR HANDLING
// javascript
// try {
//     // Code that might throw an error
// } catch (error) {
//     console.error("Something went wrong:", error);
// } finally {
//     // Code that always runs
// }
// 12. ES6+ FEATURES
// javascript
// // Template literals
// let message = `Hello ${name}!`;

// // Destructuring
// let [a, b] = [1, 2];
// let {name, age} = person;

// // Spread operator
// let newArray = [...oldArray, newItem];

// // Rest parameters
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// 13. ASYNCHRONOUS JAVASCRIPT
// javascript
// // Callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 1000);
// }

// // Promises
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// // Async/Await
// async function getData() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// 14. MODULES (ES6+)
// javascript
// // Export
// export const myVariable = 42;
// export function myFunction() {};

// // Import
// import { myVariable, myFunction } from './module.js';
// import * as myModule from './module.js';
// 15. REGULAR EXPRESSIONS
// javascript
// let pattern = /hello/i; // i = case insensitive
// pattern.test("Hello World"); // true
// "Hello World".match(pattern); // ["Hello"]