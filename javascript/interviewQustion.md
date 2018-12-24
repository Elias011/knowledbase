#Javascript job interview qustions

### what is the pure function?

It's a function always returns the same result given same parameters.


###What is closures?

Function inside function that relies on variables in the outside function to work.

document.querySelector: to select the first link inside the elements has the selector.

document.querySelectorAll: to select all the links inside the elements has the selector.

### Difference between === and =?

This is pretty simple but at the same time some people never came across a triple equals or never wondered what's the difference.
Double equals == is used to compare the value of two operands:
"2" == 2; // true
 2  == 2; // true

Triple equals === is used to compare the value AND type of two operands:
"2" === 2; // false
 2  === 2; // true

###Difference between null and undefined

This can be tricky and the best way to keep in your head is to memorise because if you try to relate javascript null to other languages, it will get more confusing.
In javascript, null is an object with no value and undefined is a type.
typeof null; // "object"
typeof undefined; // "undefined"


var a;
var b = null;
a == b; // "true" because their values are the same
a === b; // "false". they have different types


###Cool ES7

spread operators, deconstructors, arrow functions (map, filter, reduce)

### What is JavaScript Reserved Words?

In JavaScript you cannot use these reserved words as variables, labels, or function names
https://www.w3schools.com/js/js_reserved.asp

### How to Schedule (Cron) Jobs with Cloud Functions for Firebase

### What is the difference between save and save-dev?
The difference between these two, is that devDependencies are modules which are only required during development,
while dependencies are modules which are also required at runtime.