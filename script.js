// JavaScript Statements

document.getElementById("demo").innerHTML = "Hello Yeahyea Sarker!";

//JavaScript White Space

/*
JavaScript ignores multiple spaces. You can add white space to your script more readable

let person = "Yeahyea";
let person="Yeahyea";
*/

//JavaScript length and line breaks

/*
For Best readability, programmers often like to avoid code lines longer then 80 characters.
If  a JavaScript statement does not fit on one line, the best place to break it is after an operator:
*/

document.getElementById("demo").innerHTML = 
"Yeahyea Sarker";

//JavaScript Code Blocks

/**
 * JavaScript Statements can be grouped together in code blocks, inside curly brackets{....}.
 * The Purpose of code blocks is to define statements to be executed together.
 * One place you will find statements grouped together in blocks, is is JavaScript functions:
 */

function myFunction() {
     document.getElementById("demo1").innerHTML = "JavaScript Block One ";
     document.getElementById("demo2").innerHTML = "JavaScript Block Two";
}
myFunction();


//JavaScript Keywords
/**
 * JavaScript Statements often start with a keyword to identify the JavaScript action to be performed.
 * Here is the Reserved Words Reference list of JavaScript keywords.
 */

/**
 * Keywords    ======  Description.
 * Var              ======  Declares a variable.
 * Let               ======  Declares a block variable.
 * Const           ======  Declares a block variable.
 * if                  ======   Marks a block of statements to be executed on a condition
 * switch          ======   Marks a block of statements to be executed on a different cases
 * for               ======   Marks a block of statements to be executed in a loop
 * function      ======   Declares a function
 * return         ======    Exits a function
 * try               ======  Implements error handling to a block statements
 */