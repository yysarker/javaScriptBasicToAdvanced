//javaScript Functions
let x = myFunction(5,5);
function myFunction(p1, p2) {
     return p1 * p2;
}

document.getElementById("demo").innerHTML =  "5 * 5 = " + x; 

/*
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.
*/


//Why Functions?

/*
You can reuse code: Define the code once, and use it many times.
You can use the same code many times with different arguments, to produce different results.
*/

//Convert Fahrenheit to Celsius:
let y = toCelsius(77);
function toCelsius(fahrenheit) {
     return (5/9) * (fahrenheit - 32);
}

document.getElementById("demo1").innerHTML = "The temperature is " + y + " celsius";

//Local Variables

/**
 * Variables declared within a JavaScript function, become LOCAL to the function.
 * Local variables can only be accessed from within the function.
 * 
 * Example:
  // code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
 */