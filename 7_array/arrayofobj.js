let students= [
    {
        fullName : "Radhika",
        age: 30,
        skill:["C++","java","python"],
        city: "Pune",
        },
     {
        fullName : "Swapna",
        age :25,
        skill:["sql","dbms","js"],
        city: "Nagpur",
        },
     {
        fullName : "Rani",
        age :35,
        skill: ["c++","c","java"],
        city: "Nashik",
        }
]

// console.log(students)        //print all objects
// console.log(students[1])        //print last object/element

//retrieve
// console.log(students[1].fullName)
// console.log(students[1]['fullName'])

// //update push() in array
// students[2].skill.push("python")
// console.log(students[2].skill)




// //simple for loop
// for ( let i=0;i<students.length;i++){
//     console.log(students[i]['fullName'],students[i]['skill'].length)
// }



// students.forEach(function(el,index,arr){
//     console.log(el['fullName'],el['skill'].length)
// })




// let hh= students.filter(function(el,index,arr){
//     return el.age>25
// })
// console.log(hh)
// hh.forEach(function(el){
//     console.log(el.fullName)
// })




// //same output as above 
// let hh= students.filter(function(el,index,arr){
//     return el.age>25
// }).forEach(function(el){
//     console.log(el.fullName)
// })




    
// //average age 
// let cc= students.reduce(function(acc,el){
//   return acc+ el.age
// },0)

// console.log("average age of students is - ", cc/students.length)





// //print stud whose city = nagpur and skill includes js
// let u= students.filter(function(el,index,arr){
//     return el.city=='Nagpur' && el.skill.includes('js')
// })
// console.log(u)