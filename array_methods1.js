// //Array   enables storing a collection of multiple items under a single variable name
// //          0           1       2       3    index 
// let names = ["gayatri", "sweety", "priya", "reena"]
// console.log(names)

// //object ==> property , method


// //human 
// //property method 
// //property - height, color , weight
// //method - walk(), talk(), eat()

// //vehicle 
// //property method
// //property -vehicle number, color, model number
// //method - start(), stop()

// //babnk acc
// //property and method
// //property - account balance , Acc_num, name 
// //method - deposit(), withdrawal()

// //Everything in JS is object
// //So Array is also a object
// //if Array is an object , it will have a property and method



// //property==> length
// let fruits = ["apple", "banana", "kiwi", "pineapple"]
// console.log(fruits.length)



// let fruits = ["apple", "banana", "kiwi", "pineapple"]
// //method - push()
// //action - add the element to the last
// //return - new length of Array

// let a = fruits.push("watermelon")
// console.log(a)
// console.log(fruits)









// //method unshift()
// //action - add element to the start of the array
// //return - new length of the array

// fruits = ['apple', 'banana', 'kiwi', 'pineapple', 'watermelon']

// let b = fruits.unshift("CustardApple")
// console.log(b)
// console.log(fruits)






// //mehtod pop()
// //action - removes the element from the last
// //returns - returnd the poped element
// fruits = [
//     'CustardApple',
//     'apple',
//     'banana',
//     'kiwi',
//     'pineapple',
//     'watermelon'
// ]
// let c = fruits.pop()
// console.log(c)
// console.log(fruits)









//method shift ()
//action - removes the element from the first
//return - return the removed element 

// fruits = ['CustardApple', 'apple', 'banana', 'kiwi', 'pineapple']

// let d = fruits.shift()
// console.log(d)
// console.log(fruits)







//methoid indexOf()   //case - sensitive
//action - search for the element
//return - retuen the index of the element if present , else -1

// fruits = ['apple', 'banana', 'kiwi', 'pineapple']
// console.log(fruits.indexOf("banana"))





// //method includes()
// //action - search for the element 
// //return - If element is present returns true, else false

// console.log(fruits.includes("kiwi"))





//method slice()
//action - divides the array based on index
//return - array
//        0     1   2   3   4   5   6  7
// let num = [11, 22, 33, 44, 55, 66, 77, 88]
// //        -8   -7  -6  -5  -4  -3  -2  -1

// console.log(num.slice(1, 3))

// console.log(num.slice(1)) //display all from 1

// console.log(num.slice(-4))

// console.log(num.slice(-4, ))//empty array







// //push() pop() indexOf()  includes() shift() unshift() slice() spluice()

// //map() filter() reduce() forEach() some() every() find() findIndexOF()





// let birthYear = [2000, 2010, 1995, 1980]
// //output should b current ages

// let age = []
// for (i = 0; i < birthYear.length; i++) {
//     age.push(2022 - birthYear[i])
// }
// console.log(age)






//method - map()
//action - works with every element of array
//return - new Array

//el - current element
//index- index

//  let birthYear = [2000, 2010, 1995, 1980]
// let mm=birthYear.map(function (el) {
// //     console.log(2022 - el)
// //    console.log(mm)
//     return 2022 - el
// })
// console.log(mm)






//filter by for loop
// let age = [20, 33, 45, 66, 77, 64, 32]
// let above30 = []

// for (i = 0; i <= age.length; i++) {
//     if (age[i] > 30)
//         above30.push(age[i])
// }
// console.log(above30)



// //array method filter()
// //action - filter out the elements based on conditions
// //return - new array
// age = [20, 33, 45, 66, 77, 64, 32]
// let ff = age.filter(function (el) {
//     return el > 30
// })
// console.log(ff)





// // method reduce()
// // action - adds up every element
// // return - return single value
// let age = [20, 33, 45, 66, 77, 64, 32]
// let rr = age.reduce(function (acc, el) {
//    // console.log(acc,el)
//     return acc + el
// }, 0)
// console.log(rr)






// //method forEach()
// //action - works with every element of array
// //returns nothing
// let names = ["aa", "bb", "cc", "dd", "ee"]

// names.forEach(function (el, index, arr) {
//     console.log("hello", el)
// })




////print all array elements:

// let num=[1,2,3,4,6,7,78,56]

// num.forEach((n,i,nums)=> console.log(n)); 







// let ab = [11, 22, 33, 44]

// let mapArr = ab.map(el => el * 2)
// console.log(mapArr)

// let filArr = ab.filter(el => el > 20)
// console.log(filArr)

// let redArr= ab.reduce((acc,el) =>acc+el,0 )
// console.log(redArr)

// //every()   - checks for each condition is true
// //some()   - checks for atleast one condition is true
// //find()   - checks for 1st element where condition becomes true


// let sum = [1,2,3,4,50,6,7,8,9,10]

// /* let s1=sum.every(function(el,index,arr){
//     return el >1                //always check for condition 
// }) */
// let s1=sum.every(el=> el>1)
// console.log(s1, "result of every")

// let s2= sum.some(el => el>5)
// console.log(s2, "result of some")

// let s3= sum.find(el => el>5)
// console.log(s3, "result of find")   //50    //undefined if not found

// let s4= sum.findIndex(el => el==4)
// console.log(s4, "result of findIndex")

// let s5= sum.reverse()      ///no parameters required
// console.log(s5, "result of reverse")

// let sum1=[34,312,1,0,532,31,33,32,34,334]
// let s6=sum1.sort()
// console.log(s6, "result of sort")


// //concat() 2 arrays to one
// a1=[1,2,3]
// a2=[4,5,6]
// a3=a1.concat(a2)
// console.log(a3)  ////no change in a1,a2     





// //join()
// a4=["Gayatri","Suresh","Mahale"]
// a5=a4.join('@')
// console.log(a5)
// console.log(a4)//no change in previous array






// //flat()
// let cc=[[1,2,3,4],[44,55,66],[11,22,33,44]]
// let cc2=cc.flat()
// console.log(cc2) //no change in cc




// //fill()
// let marks=[23,43,33,12,65]
// m1=marks.fill(3,2)
// console.log(m1)///changes the previous array
// console.log(marks)//changes the previous array
