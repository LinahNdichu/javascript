// STARTING WITH BASIC JAVASCRIPT DATATYPES AND VARIABLES

/**
 * === DATA TYPES ===
 * 1. Number
 * 2. Boolean
 * 3. null
 * 4. undefined
 * 5. string
 * 6. Object
 * 7. Array
 */

// 1. Number

// e.g; 1, 3.6, 1e-4
const linahAge = 20;
let salary = 10000.45;

salary = 20000;

// 2. Boolean

// e.g; true, false
const isAgeAllowed = false;
const isHeightAppropriate = true;

// 3.null

// e.g; null
const numberOfCars = null;

// 4. undefined

// e.g; undefined
const hoursWorked = undefined;

// 5. string

// e.g; "anything", 'anything', `anything`
const string1 = "This is string 1"; // double quotations
const string2 = 'This is string 2'; // single quotations
const string3 = `This is string 3`; // backticks

// illustration of backticks
const name = "John";
const age = 60;

const statement = `My name is ${name}, and I am ${age} years old.`;

console.log(statement);

// illustration of quotations
// const name = "John";
// const age = 60;

const statement1 = "My name is " + name + ", and I am " + age + " years old.";

// console.log(statement);

// 6. Objects

/**
 * e.g;
 * {
 *   property: value,
 *   property: value,
 *   property: value,
 *   property: value,
 * }
 */

// ES6: if you have a variable called name and you have a property in an object called name you can shorten the syntax of the object

/**
 * if object is myObject
 * property = name
 * 
 * instead of putting it this way
 * const myObject = {
 *   name: name
 * }
 * 
 * you can shorten it by saying
 * 
 * const myObject = {
 *   name
 * }
 */

const ourObject = {
    name: 'Linah Ndichu',
    age: 20,
    occupation: 'Software Developer'
}

const ourSecondObject = { name: 'Edwin Murimi' }

const objectName = 'John K. Doe';

const ourThirdObject = { objectName };

// console.log(ourThirdObject);

// 7. Array

/**
 * e.g;
 * 
 * [2, 4, 7, 4, 7, 3]
 * 
 * ["John", "Kennedy", "Franklin"]
 * 
 * [{ name: "John", age: 75 }, { name: "Kennedy", age: 49 }, { name: "Franklin", age: null }]
 */

const presidents = [{ name: "John", age: 75 }, { name: "Kennedy", age: 49 }, { name: "Franklin", age: null }];

const ages = [34, 35, 245, 78, 42, 36];

const names = ["John", "Kennedy", "Franklin"];

console.log(names);


// cool things about Objects

console.log(ourObject.occupation);

// cool  things about arrays
console.log(presidents[0]);

