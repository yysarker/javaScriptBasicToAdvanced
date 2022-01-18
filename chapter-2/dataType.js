//JavaScript Data Types
/**
 * JavaScript Variable can hold different data types; numbers, strings, objects and more:
 * 
 * let length = 16; // Number
 * let lastName = "Sarker"; //String
 * const personData = { firstName: "Yeahyea", lastName: "Khan"}; //Object
 */

// let x = 16 + "Volvo";
// console.log(x);

// let y = "16"+ "Volvo";
// console.log(y);

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
// var z = 16 + 4 + "Volvo";
// console.log(z);

// var z = "Volvo" + 16 + 4;
// console.log(z);

//In the Third example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

//In the Fourth example, since the first operand is a string, all operands are treated as strings.


//JavaScript Types are Dynamic

//JavaScript has dynamic types. This means that the same variable can be used to hold different data type

// let $$;
// $$ = 5;
// $$ = "Name";
// $$ = {type: "Dynamic Variable", design: "Figma"}; 

// document.getElementById('demo'). innerHTML = $$.type;


//JavaScript Strings
//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// let answer1 = "It's alright. "; //Single quote inside double quotes
// let answer2 = 'He is called "Yeahyea". ';
// let answer3 ="He is called 'Yeahyea'";
// console.log(answer1 + answer2 + answer3);


//JavaScript Numbers
// JavaScript has only one type of numbers.
//JavaScript can be written with or without decimals:
// let x1 = 34.00;
// let x2 = 34;
// console.log(x1 , x2);


//Extra large or extra small numbers can be written with scientific (exponential) notation:

// let x3 = 123e5;
// console.log("Extra large number written by 123e5 = " + x3);

// let x4 = 123e-5;
// console.log(x4);

//JavaScript Booleans
//Booleans can only have two values true or false.

// let x = 5;
// let y = 5;
// let z = 6;
// console.log(x == y);
// console.log(x == z);

//JavaScript Arrays
const cars = ['Volvo', 'BMW', 'cool'];
console.log("Array values: "+cars);

//JavaScript Objects
const person = {firstName: "Yeahyea", lastName: "Sarker", age: "100", eyeColor: "black"};
document.getElementById('demo').innerHTML =("Object values : " + "I'm " + person.firstName + ' '+person.lastName+", and age is "+person.age + " years, and eye color is " + person.eyeColor+'.' );
console.log(typeof(person));

//Undefined
let car; //value is undefined, type is undefined
car = undefined; //value is undefined, type is undefined

let cars = ""; //value is empty, type is string

