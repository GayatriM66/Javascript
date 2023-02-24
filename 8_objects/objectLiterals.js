//Object Literals

let Amol = {
    fullName : "Amol Rao",
    age : 32,
    skills : ['javascript','Cypress']
}

let reena = {
    fullName : "Reena Sharma",
    age : 35,
    skills : ["javascript","Cypress","SQL"] 
}


//retrieve
Amol.fullName
Amol['fullName']

//update
Amol.fullName= "Amol patil"
Amol.age= 44
Amol['fullName']="Amol Pawar"
Amol['age']= 55

//add
Amol.city ="Delhi"
Amol['language']= "Marathi"

//delete
delete Amol['city']

console.log(Amol)
console.log(reena)

//setting the properties outside the class
class Person {
    fullName = undefined
    age= undefined
    skills = undefined
}

let amol2 = new Person()
let reena2 = new Person()

//setting the values which is undefined
console.log(amol2)
amol2.fullName= "Amol Pawar"
amol2.age=32
amol2.skills=["javascript","cypress","python"]
amol2.language="Marathi"
console.log(amol2)

reena2['fullName']="Reena More"
reena2['age']=45
reena2['skills']=["javascript", "cypress","SQL","cpp","java"]
reena2['language']= "English"
console.log(reena2)

//setting the values using Constructor
class Person3 {
    constructor(fn, ag , skl){
        this.fullName= fn
        this.age=ag
        this.skills=skl
    }
}
let nalini= new Person3()
console.log(nalini) ////undefined

let sheetal = new Person3("Sheetal Shetty", 25,["cpp","javascript","SQL"])
let pinky = new Person3("Pinky sheikh", 45,["C","javascript","Python"])
console.log(sheetal)
console.log(pinky)
pinky['language']="Tamil"

let students = [
    new Person3("Jia",23, ["cpp","Javascript","Python"]),
    new Person3("Anjali",45, ["Python","SQL","JAVA"]),
    new Person3("Sonakshi",12, ["cpp","Python"])
]

console.log(students[0])

students.forEach(function(el,index){
    for(let key in el){
        console.log(key,el[key])
    }
})

let lang = ["hindi","Marathi","English"]
students.forEach(function(el,index){
    el.language=lang[index]
})
console.log(students)

////Setting the properties outside the class
//Setting the properties at the time of object creation using constructor
//using set function

class Person4{
    setName(nm){
        this.fullName=nm
    }
    setAge(ag){
        this.Age=(ag)
    }
    setRollNumber(rn){
        this.rollNumber=rn
    }
}
let sweety=new Person4()
console.log(sweety)

sweety.setAge(33)
sweety.setName("SWEETY")
sweety.setRollNumber(44)
console.log(sweety)