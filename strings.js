// JavaScript Strings

let text = "Nila Sarker";
console.log(text);

//You can use single and double quote
let carName1 = "Volvo XC60"; //Double quote
console.log(carName1);
let carName2 = 'BMW XC70'; //Single quote
console.log(carName2);

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let answer1 = "It's alright";
console.log(answer1);
let answer2 = "He is called 'Sarker'";
console.log(answer2);
let answer3 = 'He is called "Khan"';
console.log(answer3);


//String Length
//To find the length of a string, use the built-in length property:
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text1);
console.log("Total Alphabet is "+text1.length);

//Escape character
/**
 * Because string must be written within quotes, JavaScript will misunderstand this string:
 * 
 Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
 */

let text2 = "We are the so-called \"Vikings\" from the north."; 
// let text3 = 'We are talking about \'Our Self\', with my Partner.';
// let text3 = 'I want to be a Engineer \\ Doctor';
let text3 = 'My name is NSD \ my full name is Khan';
console.log(text2);
console.log(text3);

let myName = "Yeahyea Sarker";
document.getElementById('demo').innerHTML = myName.big();

/**
 Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
 */