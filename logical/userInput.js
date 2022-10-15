//take input from the user ,
// accept only if it contains 8 to 18 characters



let string
let flag=true
do{
    string = prompt("Enter the string")
    if(string.length>=7 && string.length <=18){
        flag=false
    }
}while(flag)