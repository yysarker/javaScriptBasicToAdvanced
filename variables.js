//4 Ways to Declare a JavaScript Variable:

/**
 * Using var
 * Using let
 * Using const
 * using nothing
 */


/**
 * Wrong const variable declaration
 * 
 * const testValue; 
 * testValue = 10;
 * console.log(testValue);
 * 
 * Right variable declaration
 * const testValue = 10;
 */

// var helloT = 12; 
// let helloT = 13;
// const helloT = 14;
// helloT = 100;
// console.log(helloT);


//What are Variables?
// Variables are combination of storing data (storing data values).

// In this example , x, y, and z are variables, declared with the var keyword:
/**
 * var x = 4;
 * var y = 5;
 * var z = x + y;
 */

// In this example, x, y and z are undeclared variables:
/**
 * x = 5;
 * y = 6;
 * z = x + y;
 * console.log(z);
 */

// var a = 10;
// var a = 11;
// console.log(a);

// const price1 = 10;
// const price2 = 10;
// let total = price1 + price2;
// console.log(total);

// Examples of valid JavaScript variable names:

/**
 * let apples;
 * let $apples;
 * let _apples;
 * let apples4eva;
 * let apple$;
 */

// let myName = "Yeahyea Sarker";
// console.log(myName);

//When to use javascript var , let , const

/**
 * Var:
 * var used every where during 2009 -  2015;
 * 
 * const:
 * It's use if that value not changed in future
 * 
 * let:
 * It is scope variable 
 */
// let x = 5 + "5";

// console.log(x);

//Assignment Operator
// This is ( = ) assignment operator

 //Equal Operator
// The "equal to" operator

//Template Literals 
// console.log(`Look How
// Cool this string is.
// It is on multiple lines!          
// `);

//String Interpolation
// const restaurant = "Chipotle";
// console.log(`My favorite restaurant is ${restaurant}!`);

//ToLowerCase
// const place = "Mexico City";
// console.log(place.toLowerCase());

//To UpperCase
const place = "Dhaka City";
console.log(place.toUpperCase());

//Repeat
const phrase = " time and";
const sentence = "I dominate in Fortnite" +phrase.repeat(3) +" time again.";
console.log(sentence);

//Replace
const newSentence = "This House is red";
const changeSentence = newSentence.replace('red', 'blue');
console.log(changeSentence);

//Includes
const sentenceIn = "The house is red.";
console.log(sentenceIn.includes("house"));
console.log(sentenceIn.includes("tiger"));

//Constant Array
// const myName = ['Yeahyea', 'Saifulla', 'Navil', 'Sarker'];
// myName[3] = "Hello";
// myName.push('Ifty');
// console.log(myName);


//constant Objects

// const car ={
//      type: "Volvo",
//      model: "500CRT",
//      color: "white",
//      price: "5lack"
// }
// console.log(car);

//Changes object property
// car.color = 'Black'; 
//Added object property
// car.owner = "Yeahyea Khan";

