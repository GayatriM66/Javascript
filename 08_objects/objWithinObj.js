let student={
    name : "gayatri",
    age: 30,
    laptop :{
        cpu :'i3',
        ram :4,
        memory: '1TB'
    }
} 
//console.log(student)
console.log(student.laptop['memory']) //1Tb

console.log(student.laptop.memory1.length) //undefined memory1
console.log(student.laptop.memory.length)  //op 3

//delete student.age
//console.log(student)

//fetch only value
for (let a in student)
{
    console.log(a,student[a])  //a= key,  student[a]=value
}

console.log(student.laptop)//only laptop object printed