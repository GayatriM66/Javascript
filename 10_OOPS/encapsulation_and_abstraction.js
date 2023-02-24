//1. Encapsulatoion 
//2. Abstraction

// Encapsulation in JavaScript
// Encapsulation is wrapping the property and the function within a single unit. 
//Consider the following example: 



// class Emp_details{ 
//     constructor(name,id){ 
//         this.name = name; 
//         this.id = id; 
//     } 
//     add_Address(add){ 
//         this.add = add; 
//     } 
//     getDetails(){ 
//        console.log(`Employee Name: ${this.name}, Address: ${this.add}`); 
//     } 
// } 
// let person1 = new Emp_details('Anand',27); 
// person1.add_Address('Bangalore'); 
// person1.getDetails(); 

//Here, 
//the class holds the data variables name and id along with the functions add_Address and getDetails. 
//All are encapsulated within the class Emp_details.






//2. Abstraction
// Abstraction example
function person(fname,lname){
    var firstname = fname;
    var lastname = lname;
 
    var getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }
 
   this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person1 = new person('Mukul','Lata');
console.log(person1.firstname); //undefined
console.log(person1.getDetails_noaccess);//undefined
console.log(person1.getDetails_access()); //First name is: Mukul, Last name is: Lata


//In the above example we try to access some property(person1.firstname)
//and functions(person1.getDetails_noaccess) but it returns ""undefined"""
//while their is a method which we can access 
//from the person object(person1.getDetails_access()).
//By changing the way we define a function we can restrict its scope.
