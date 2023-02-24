//A callback the function is a function that is passed to another function 
//as an argument and is executed after some operation has been completed. 
//Below is an example of a simple callback function that logs to the console 
//after some operations have been completed.



// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
//   }
  
//   var arr = [1, 2, 3, 4, 5];
  
//   modifyArray(arr, function() {
//     console.log("array has been modified", arr);
//   });


//same program 1st way, passing function name in parameter
arr=[10,20,30,40]

function arrayModify(array,callback){
    array.push(100)
    callback()
}

arrayModify(arr,printArray)

function printArray(){
    console.log(arr, "this is a callback function ")
}




//same program 2nd way, passing function in a parameter
arr=[10,20,30,40]

function arrayModify(array,callback){
    array.push(100)
    callback()
}

arrayModify(arr,function(){
    console.log(arr, "this is a callback function ")
})



