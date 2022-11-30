// //primitive datatypes
// let a =10
// a=30
// console.log(`value of a is ${a} \n`)




// let  y=45
// a=y;
// y=3;
// console.log(`value of y is ${y}`)
// console.log(`value of a is ${a} \n`)





// // //typeof()
//let fruits = ["apple","banana","kiwi","pineapple"]
// console.log("typeof(fruits)is ",typeof(fruits))  // object type




// //non-primitive datatypes=====>
// let arr1=[1,2,3,4]
// let arr2=arr1
// console.log(`arr1 is: ${arr1}`)
// console.log(`arr1 is: ${arr2}`)

// //update the value for arr2 and check the values of both array
// arr2[0]="hello"

// console.log("----------updated------------------")
// console.log(`arr1 is: ${arr1}`)
// console.log(`arr1 is: ${arr2}`)
// //here arr1 value is alo getting updated, because they are sharing a heap memory






// //length : The length property provides an easy way to append a new element to an array:
// //           0  1  2  3
// let numbers=[11,22,33,44]
// console.log(numbers.length)
// console.log(typeof numbers) //object
// //This because in javascript all derived data type is always a type object. 
// //Included functions and array.
// console.log(numbers[numbers.length-1])//numbers[3] 
//        // (4-1) 3rd index, ie 44 number.



// //append new element to array
// numbers[numbers.length]=55
// console.log(numbers)




// // //append new element at 10 position
// // numbers[numbers.length+3]="Bigg"    //<3 empty items>
// // console.log(numbers)

// //Adding elements with high indexes can create undefined "holes" in an array.
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
// console.log(fruits)




// ///         array2
// //                0       1        2        3
// let lastName=["sharma","mishra","gupta","deshmukh"]
// console.log(lastName.length)


// // //print all elements in forward order : loop
// // console.log("\n forward order")
// // for(i=0;i<4;i++)
// // {
// //     console.log(lastName[i])    //name
// // }


// //print all elements in reverse order
// console.log("\n reverse order")
// for(let i=lastName.length-1;i>=0;i--)
// {
//     console.log(lastName[i])
// }









// //push()
// let fruits = ["apple","banana","kiwi","pineapple"]
// let cc=fruits.push("papaya")
// console.log(cc)
// console.log(fruits)




// //pop()
// let fruits = ["apple","banana","kiwi","pineapple"]
// let dd= fruits.pop() 
// console.log(dd)
// console.log(fruits)




// //unshift()
// let fruits = ["apple","banana","kiwi","pineapple"]
// let ee=fruits.unshift("strawberry")
// console.log(ee)    //new array length




// //shift()
// let fruits = ["apple","banana","kiwi","pineapple"]
// let ff=fruits.shift()
// console.log(ff)
// console.log(fruits)




// //indexof()
// let fruits = ["apple","banana","kiwi","pineapple"]
// console.log(fruits.indexOf("guava"))// -1 if element not available





// //includes()
// let fruits = ["apple","banana","kiwi","pineapple"]
// console.log(fruits.includes("apple"))
// console.log(fruits.includes("abddd"))



// //reverse()
// let fruits = ["apple","banana","kiwi","pineapple"]
// fruits.reverse()
// console.log(fruits)// it reverses the  original array



// //concat()
// let fruits = ["apple","banana","kiwi","pineapple"]
// let fruits2= ["Orange"]
// newfruits=fruits.concat(fruits2)
// console.log(newfruits)
// // The concat() method concatenates (joins) two or more arrays.
// // The concat() method returns a new array, containing the joined arrays.
// // The concat() method does not change the existing arrays.

// //console.log(fruits.concat(["hey","hello"]))

// //concat()
// let a=[11,22];
// let b =[44,55]
// let c=[66,77]
// newarr=[...a,...b,...c]
// console.log(newarr)

// let newarr1=newarr.concat(b,c);
// console.log(newarr1) 




// // //slice()     The slice() method does not change the original array.
// // array.slice(start, end)

// // start:	Optional.
// // Start position. Default is 0.
// // Negative numbers select from the end of the array.

// // end:  Optional.
// // End position. Default is last element.
// // Negative numbers select from the end of the array.

// // return : A new array containing the selected elements.

// // The slice() method returns selected elements in an array, as a new array.
// // The slice() method selects from a given start, up to a (not inclusive) given end.
// // The slice() method does not change the original array. *IMP
// let fruits = ["apple","banana","kiwi","pineapple"]
// let a=fruits.slice(-1);
// console.log(a);
// console.log(fruits)

// console.log(fruits.slice(0,3))  //[ 'apple', 'banana', 'kiwi' ]
// console.log(fruits.slice(2))  //[ 'kiwi', 'pineapple' ]
// console.log(fruits.slice())   //returns same array
// console.log(fruits.slice(-3,-1))//[ 'banana', 'kiwi' ], last element not considered
// console.log(fruits.slice(-1))//prints last element



// let array1 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let c = array1.slice(2, 5)
// console.log(array1);  //not changed
// console.log(c);






//splice(index, deleteCount, replace,replace)    
//returns, removed elements 
//changes the original array

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
/// array.splice(index, howmany, item1, ....., itemX)

// //            0        1       2       3         4            
// let fruits1=['apple','banana','mango','papaya','cherry']
// //             -5      -4      -3      -2       -1

// let f1=fruits1.splice(1,2)
// console.log(f1)   //returns removed elements
// console.log(fruits1) //new spliced array



//  fruits1=['apple','banana','mango','papaya','cherry']
// let f2=fruits1.splice(2)
// console.log(f2)
// console.log(fruits1)



// fruits1=['apple','banana','mango','papaya','cherry']
// let f6=fruits1.splice(-3)
// console.log(f6)
// console.log(fruits1)



// fruits1=['apple','banana','mango','papaya','cherry']
// let f3=fruits1.splice(1,2,"custardAplle","custardAplle","custardAplle")
// console.log(f3, "splice")
// console.log(fruits1, "After splice")


// fruits1=['apple','banana','mango','papaya','cherry']
// let f4=fruits1.splice(1,2,"custardAplle")
// console.log(f4)
// console.log(fruits1) 





// let months = ["January", "February", "Monday", "Tuesday"];
// months.splice(2, 0, "March","April");//0 deleted , 2 values inserted
// console.log(months); 
// // // [ 'January', 'February', 'March', 'April', 'Monday', 'Tuesday' ]     






// let months = ["January", "February", "Monday", "Tuesday"];
// let days = months.splice(2, 2, "March", "April");

// console.log(days); // ["Monday", "Tuesday"]
// console.log(months); // ["January", "February", "March", "April"]





 
// //fill()
// // array.fill(value, start, end)
// // start index position and stop index position
// // The fill() method fills specified elements in an array with a value.
// // The fill() method overwrites the original array.
// // Start and end position can be specified. If not, all elements will be filled.


// let ee=[11,22,33,44,55,66,77,88]
// console.log(ee.fill(2,4,5));
//  console.log(ee.fill(2));
//  console.log(ee.fill());   //undefined
 
 


//  //includes()
// let ee=[11,22,33,44,55,66,77,88]
// console.log(ee.includes(55)); 
// console.log( ee.includes(4));
// console.log(typeof ee.includes()); //boolean



// //indexof()
//  let arr=[11,22,33,44,55,66,77,88,22,11]
//  console.log(arr.indexOf(22));
//  console.log(arr.indexOf(11));
//  console.log(arr.indexOf(4));
 

////sort()
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.
//Sorting alphabetically works well for strings


// let sortStr=['apple','banana','pineapple','guava','custardapple','Lemon']
// console.log(sortStr.sort())
// console.log(sortStr)



// But, sorting numbers can produce incorrect results.
// "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function"



// let arr1=[1,5,6,3,400,45]
// console.log(arr1.sort())
// function compareFunction(a,b){
//    // console.log(arr1)
//   // console.log(a,b)
//   // console.log(a-b)
//     return a-b          //if a-b result is +ve b comes first(a and b replaced), else a comes first
// }
// arr1.sort(compareFunction)
// console.log(arr1)


// //toString()
// //converts array to string with , seperated values
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(a=fruits1.toString())
// console.log(typeof fruits1)
// console.log(a.split(","))





//The join() method also joins all array elements into a string.
//It behaves just like toString(), 
//but in addition you can specify the 


// // join()
// let dd=[11,22,33,44,55,66,77,88]
// console.log( dd.join())
// console.log(dd.join('@')) 
// console.log(dd.join(' ')) //typeof is string




// //Delete()
// // //Warning !
// // Array elements can be deleted using the JavaScript operator delete.
// // Using delete leaves undefined holes in the array.
// // Use pop() or shift() instead.
// //Example
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits1[0];
// console.log(fruits1)