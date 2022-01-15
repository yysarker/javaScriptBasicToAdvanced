//JavaScript Syntax

/**
 * JavaScript syntax is the set of rules, how JavaScript programs are constructed.
 */

//How to created variables:
//  var x;
//  let y;

 //How to use variables:
//  x = 5;
//  y = 6;
//  let z = x + y;

//  console.log(z)

 /**
  * JavaScript values
  * The JavaScript syntax defines two types of values:
  * 
  * Fixed values
  * Variable values
  * 
  * 
  * Fixed values are called Literals.
  * Variable values are called Variables
  * 
  */

 //JavaScript Literals
 //The two most important syntax rules for fixed values are: 1.Number and 2. Strings
 //Number can be written with or without decimals
//  let n = 10;
//  let m = 10.1;
 
 //Strings are text, written within double or single quotes.
// const d = "Yeahyea Sarker";
// const e = 'Yeahyea Sarker';

//JavaScript Variables
/**
 * 
 * In Programming language, variables are used to store data value.
 * JavaScript uses to keywords var, let, and const to declare variables.
 * An equal sign is used to assign values to variables.
 *  
 */

//JavaScript Operators 
/**
 * 
 * JavaScript users arithmetic operators (+,-, *, /) to compute values:
 * (5+6) * 10
 */

//JavaScript Expressions
/**
 * An expression is a combination of values, variables and operators, which computes to a value.
 * The computation is called an evaluation.
 * For example, 5 * 10 evaluations to 50:
 * 5 * 10 = 50;
 * 
 * 
 * JavaScript also can contain variable values:
 * x * 10;
 * 
 * The Values can be of various types, such as numbers and strings.
 * For Example, "John" + " " + "Doe", evaluated "John Doe":
 * 
 */

//JavaScript Keywords
/**
 * JavaScript keyword are used to identify actions to be performed
 * 
 * The let and var are keyword tell the browser to create variables:
 * Example:
 * let x, y;
 * x = 4 + 10;
 * y = x * 2;
 * 
 * var a, b;
 * a = 23 + 2;
 * b = a * 2;
 */

//JavaScript Comments

/**
 * There have single line comments and multiline comments  
 * (This is multiline comments)
 */

// This is single line comments


//JavaScript Identifiers / Names

/**
 * 
 * Identifiers are javascript name
 * Identifiers are used to name variables and keywords, and functions.
 * The rules for legal names are the same in most programming languages.
 * 
 */

//A javascript name must begin with:
/**
 * A letter (A-Z or a-z)
 * A dollar sign ($)
 * Or an underscore (_)
 * 
 * Subsequent characters may be letters, digits, underscores, or dollar signs.
 * 
 * Note::
 * Numbers are not allowed as the first characters in names.
 * This way JavaScript can easily distinguish identifiers from numbers.
 * 
 */

//JavaScript Case Sensitive
/**
 * ALl JavaScript identifiers are case sensitive.
 * The variables lastName and lastname, are two different variables:
 * 
 */

/**
 * let lastname, lastName;
 * lastname = "Sarker";
 * lastName = "Khan";
 * console.log(lastname);
 * console.log(lastName);
 * 
 * 
 * JavaScript does not interpret LET and Let as the keyword let.
 */

//JavaScript and Camel Case
//Historically, programmers have used different ways of joining two word into one variable name:

//Hyphens:

/**
 * first-name, last-name, master-card, inter-city;
 * 
 * Hyphens are not allowed in javaScript. They are reserved for subtractions
 */

//Underscore:
//first_name, last_name, master_card, inter_city

//Upper Camel Case
//FirstName, LastName, MasterCard, InterCity

//Lower Camel Case
// JavaScript programmers tend to use camel case that start with lowercase letter:
// firstName, lastName, masterCard, interCity.