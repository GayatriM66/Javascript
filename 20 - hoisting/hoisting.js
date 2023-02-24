//JavaScript Hoisting refers to the process whereby 
//the interpreter appears to move the declaration of functions, 
//variables or classes to the top of their scope, prior to execution of the code.

var x=1;
a();
b();
console.log(x);

function a(){
    var x=10
    console.log(x)
}
function b(){
    var x = 100
    console.log(x)
}










