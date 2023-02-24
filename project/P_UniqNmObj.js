//let and const

//function-----function declaration,function expression , arrow function
//for, while, conditional statement(if and else ternary)
//switch
//Arrays
//objects-----properties and methods
//destructure and structure
//functions (every other datatype)
//primitive and secondary
//rest and spread
//--------------------------------------------

/* let stud={
    fullName: "Gayatri Mahale",
    age: 31
}

//dot notation and bracket notatain

stud['fullName']
stud.fullName

stud.age=32
stud['age']=33

stud.lang="Hindi"
stud['lang']="Marathi"

delete stud['lang']
delete stud.lang
console.log(stud)

 */
//username + uniqueUserName

let students = [
    {
        fullName: "Anjali Singh",
    },
    {
        fullName: "Gayatri Mahale",
    },
    {
        fullName: "Geeta Matil",
    },
    {
        fullName: "Akshay Kumar",
    },
    {
        fullName: "poorva kumar",
    }
]
function uniqueName(name) {
    for (i = 0; i < students.length; i++) {
        if (students[i]['username']) {
            if (students[i]['username'] == name) {
                return name + name
            }
            
        }
    }
}

function uniqueUserName(student) {
    let nm = student.map(function (el, index) {
        if (!el.username) {
            nm1 = el.fullName.split(" ")
            name1 = (nm1[0][0] + nm1[1][0])
            let a = uniqueName(name1)
            console.log(a)
            // el.username = a
        }
    }, 0)

}

uniqueUserName(students)
console.log(students)

















