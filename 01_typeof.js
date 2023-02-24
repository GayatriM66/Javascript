//JavaScript provides a typeof operator that can examine a value and tell you what type it is:

var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"



//truthy and falsy values

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// All values are truthy unless they are defined as falsy. That is, 
//all values are truthy except:
//false, 0, -0, 0n, "", null, undefined, and NaN.




console.log(Boolean('add'))//true
console.log(Boolean(false))//false
console.log(Boolean(0))//false
console.log(Boolean(-0))//false
console.log(Boolean(0n))//false
console.log(Boolean(null))//false
console.log(Boolean(NaN))//false
console.log(Boolean(undefined))//false
console.log(Boolean("")) //false
console.log(Boolean(" ")) //true
console.log(Boolean('')) //false
console.log(Boolean(' ')) //true
