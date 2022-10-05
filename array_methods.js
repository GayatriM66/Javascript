//primitive datatypes
// let a =10
// a=30
// console.log(`value of a is ${a} \n`)


// let  y=45
// a=y;
// y=3;
// console.log(`value of y is ${y}`)
// console.log(`value of a is ${a} \n`)





// //non-primitive datatypes=====>
// let arr1=[1,2,3,4]
// let arr2=arr1

// console.log(`arr1 is: ${arr1}`)
// console.log(`arr1 is: ${arr2}`)

// //update the value for arr2 and check the values of both array
// arr2[0]="hello"

// console.log("----------------------------")
// console.log(`arr1 is: ${arr1}`)
// console.log(`arr1 is: ${arr2}`)
// //here arr1 value is alo getting updated, because they are sharing a heap memory








// //       array--->properties and methods
// //           0  1  2  3
// let numbers=[11,22,33,44]
// console.log(numbers.length)
// console.log(numbers)  //this will print full array
// console.log(typeof numbers) //object
// //This because in javascript all derived data type is always a type object. Included functions and array.

// console.log(numbers[numbers.length-1])//numbers[3]         (4-1) 3rd index, ie 44 number.



//Adding elements with high indexes can create undefined "holes" in an array.
// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";  // Creates undefined "holes" in fruits




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








let fruits = ["apple","banana","kiwi","pineapple"]

//push()
// let cc=fruits.push("papaya")

// console.log("pushed element is: " +fruits[fruits.length-1])
// console.log("new array length is ",cc)
// console.log(fruits)


//pop()
// let dd= fruits.pop() 
// console.log(dd)
// console.log(fruits)


//unshift()
// let ee=fruits.unshift("strawberry")
// console.log(ee)    //new array length
// console.log(fruits[0])
// console.log(fruits)


// //shift()
// let ff=fruits.shift()
// console.log(ff,"deleted elements")
// console.log(fruits)


// //indexof()
// let gg=fruits.indexOf("guava")// -1 if element not available
// console.log(gg)


//includes()
// let ii=fruits.includes("apple")
// console.log(ii)
// let jj=fruits.includes("abddd")
// console.log(jj)


// //reverse()
// let ll=fruits.reverse()
// console.log(ll)


// //concat()
// let fruits2= ["Orange"]
// let fruits3=fruits.concat(fruits2)
// console.log(fruits3)


// // //typeof()
// console.log("typeof(fruits) is ",typeof(fruits))  // object type



//slice()
// console.log(fruits)
// let bbb=fruits.slice(-1);
// console.log(bbb,"new fruits");
 

// let array1 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let c = array1.slice(2, 5)
// console.log(array1);
// console.log(c);



// //concat()
// let a=[11,22];
// let b =[44,55]
// let c=[66,77]
// ab=[...a,...b,...c]
// console.log(ab)

// let abc=ab.concat(b,c);
// console.log(abc) 




 //join()
// let dd=[11,22,33,44,55,66,77,88]
// console.log( dd.join())
// console.log(dd.join('@')) 
// console.log(dd.join(' ')) //typeof is string


 
//fill()
// array.fill(value, start, end)
//start index position and stop index position
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// let ee=[11,22,33,44,55,66,77,88]
// console.log(ee.fill(2,4,5));
//  console.log(ee.fill(2));
//  console.log(ee.fill());   //undefined
 
 


//  //includes()
// let ee=[11,22,33,44,55,66,77,88]
// console.log(ee.includes(55)); 
// console.log( ee.includes(4));
// console.log(typeof ee.includes(4)); //boolean



// //indexof()
//  let arr=[11,22,33,44,55,66,77,88,22,11]
//  console.log(arr.indexOf(22));
//  console.log(arr.indexOf(11));
//  console.log(arr.indexOf(4));
 

//sort()
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

let arr1=[1,5,6,3,400,45]
//console.log(arr1.sort())
function compareFunction(a,b){
   // console.log(arr1)
  // console.log(a,b)
  // console.log(a-b)
    return a-b          //if a-b result is +ve b comes first(a and b replaced), else a comes first
}
arr1.sort(compareFunction)
console.log(arr1)