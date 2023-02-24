// // The Math Object
// // Unlike other objects, the Math object has no constructor.
// // The Math object is static.
// // All methods and properties can be used without creating a Math object first.



// //Math.property  ----->        Math.PI
// //Math.method(number)---------->Math.methodName(Number)





// // Number to Integer
// // There are 4 common methods to round a number to an integer:

// // Math.round(x)	Returns x rounded to its nearest integer
// // Math.ceil(x)	    Returns x rounded up to its nearest integer
// // Math.floor(x)	Returns x rounded down to its nearest integer
// // Math.trunc(x)	Returns the integer part of x (new in ES6)



// //Math.round()
// console.log(Math.round(65.6))
// console.log(Math.round(65.5))
// console.log(Math.round(65.4))
// console.log(Math.round(1.4))
// console.log(Math.round(-1.6))



// //Math.ceil()
// console.log(Math.ceil(65.1))
// console.log(Math.ceil(122.9))
// console.log(Math.ceil(3.01))
// console.log(Math.ceil(-3.01))



// //Math.floor()
// console.log(Math.floor(65.4))
// console.log(Math.floor(-65.5))




// //Math.trunc()
// Math.trunc(4.9);
// Math.trunc(4.7);
// Math.trunc(4.4);
// Math.trunc(4.2);
// Math.trunc(-4.2);




// //math.pow(x,y)    x is a base number and y is an exponent to the given base

// console.log(Math.pow(2, 2))   //2*2
// console.log(Math.pow(2, 4))   //2*4




//  return 1 if number is +ve,
//  returns -1, if number is -ve,
//  returns 0 if number is 0
// Math.sign()

// console.log(Math.sign(-408))
// Math.sign(0);
// Math.sign(4);




// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

// console.log(Math.min(0, 150, 30, 20, -8, -200))
// console.log(Math.max(0, 150, 30, 20, -8, -200))




// // Math.abs() always prints positive value of a number.
// Math.abs(-Infinity); // Infinity
// Math.abs(-1); // 1
// Math.abs(-0); // 0
// Math.abs(0); // 0
// Math.abs(1); // 1
// Math.abs(Infinity); // Infinity

// Math.abs(-Infinity);
// let number = -12
// console.log(Math.abs(number))


//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
//Math.random 0-1  0.4455
console.log(Math.random())
console.log(Math.random())
let a = Math.random()
console.log(a)
console.log(Math.ceil(a))

