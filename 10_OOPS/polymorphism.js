//Polymorphism
//same class, same method name, different signature--> overloading

class ADD{
     addition(x,y){
        console.log(x+y,'addition(x,y)')
    }
    addition(x,y,z){
        console.log(x+y+z,' addition(x,y,z)')
    } 
    // addition(x,y,z){
    //     if(x!=undefined && y!=undefined && z!=undefined){
    //         console.log(x+y+z)
    //     }
    //     else if(x!=undefined && y!=undefined){
    //         console.log(x+y)
    //     }
    //     else{
    //         console.log("Incorrect input")
    //     }
    // }
}

let add=new ADD()
//same class, same method,different signature==> overloading
add.addition(10,10,10)
add.addition(10,10)
add.addition(10)


//different class, same method name,same signature is overriding