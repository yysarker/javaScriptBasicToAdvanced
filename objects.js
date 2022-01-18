//javaScript Objects

//Real Life Objects, Properties, and Methods

//In real life, a car is an object. 
// A car has properties like weight and color, and methods like start and stop:

// Object
//car

// Properties
/**
 * car.name = BMW
 * car.model = 500
 * car.weight = 850kg
 * car.color = white
 *  */ 

//Methods
/**
 * car.start()
 * car.drive()
 * car.brake()
 * car.stop()
 */
//  All cars have the same properties, but the property values differ from car to car.
//  All cars have the same methods, but the methods are performed at different times.


// JavaScript Objects
// You have already learned that JavaScript variables are containers for data values.

// This code assigns a simple value (Fiat) to a variable named car:

// let car = "Fiat";

// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to a variable named car:

const car = {type: "Fiat", model: 500, color: "white"};

// The values are written as name:value pairs (name and value separated by a colon).
// It is a common practice to declare objects with the const keyword.


// Object Definition
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Spaces and line breaks are not important. An object definition can span multiple lines:
//OR
/*
const person = {
     firstName:"John", 
     lastName:"Doe", 
     age:50, 
     eyeColor:"blue"
}
*/

/*
Object Properties
The name:values pairs in JavaScript objects are called properties:

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
*/


//Accessing Object Properties
//You can access object properties in two ways:
// objectName.propertyName //1 Ways
// objectName["propertyName"] //2 Ways

/*
Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/

/*

The this Keyword
In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.
In other words, this.firstName means the firstName property of this object.

 */

//Accessing Object Methods

//You access an object method with the following syntax:
// objectName.methodName();

const person = {
     firstName: "Yeahyea",
     lastName: "Sarker",
     age: 100,
     job: "Student",
     fullName: function(){
          return this.firstName + " " + this.lastName;
     }
}
const fName = person.fullName();
const fName1 = person.fullName; // If you access an object method without (), it will return the function definition:

document.getElementById('demo').innerHTML =fName;
document.getElementById('demo1').innerHTML =fName1;

// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
