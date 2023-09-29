'use strict';

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a, b) {
    return a + b;
} 

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;


// Example
console.log(undefined);

var numProducts = 10;


function deleteShoppingCart() {
    console.log('All products deleted!')
}


// Best practices
// Don't use 'var' to declare variables. Use 'const' most of the time when declaring variables, and 'let' you really need to change the variable later
// - In order to write clean code, you should always declare variables at the top of each scope
// - Always declare all your functions first, and use them only after the declaration, this applies to all functions (even function declarations which or hoisted) - Note: you could use function declaration before declaring them, but don't do that cause thats's clean


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



// This Keyword
// console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1991);



const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAgeArrow(1980);



 // const jonas = {
 //   year: 1991,
 //    calcAge: function () {
 //       console.log(this);
 //   },
 // };
 // jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge
f();



// --------------------------

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();























