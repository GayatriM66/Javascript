// let abc={}//this is a blank object
// console.log("abc typeof",typeof abc)


let person = ["gayatri", "mahale", 12, 30]
//in this array we can not say what is 12 and 30 is what for what??.
//what is age and what is roll no??





// //solution is object
// let person1 = {
//     //property/key: value,
//     firstName: "gayatri",
//     lastName: "mahale",
//     rollNo: 1234,
//     age: 30
// }






// //retrieve
// console.log(person1.firstName)  //both same
// console.log(person1['firstName'])

// //update/create    //if the property not available it will create, if available it will update.
// person1.state="maharashtra"  //create
// person1['rollNo']=2222         //update

// // delete
// delete person1.age   //delete age
// console.log(person1)









// let vehicle ={
//     vehicleName: "Baleno",
//     ModelNo: "C120",
//     Fuel: "petrol",
//     color: "grey",
//     VehicleType: "car",
// }
// console.log(vehicle)

// console.log(vehicle.vehicleName)//retrieve  vehicle[vehicleName]
// vehicle.RegNo=123456   //add         vehicle['RegNo']=123456
// vehicle.RegNo=111111    //update     vehicle['RegNo']=111111
// delete vehicle.VehicleType//delete
// console.log(vehicle)

//object does not store the value by index
//.notation and bracket notation to access the values
//objectName.propertyName
//.notation does not work inside the loop






// //bank example
// let bank={
//     bankName: "canara bank",
//     accNo:1234,
//     custName:"gayatri",
//     accType: ["saving","current"]
// }
// console.log(bank['bankName'],"is a bank name")

// //loop
// //dot notation does not work inside the loop)
// for(let cc in bank){
//     console.log(cc,bank[cc])  
// //(bank.cc will not work here in loop)  //cc works as key
// }








// let input = 'rollNo'
// let name3={
//     'first name':"gayatri",
//     rollNo : 123
// }
// console.log(name3['first name'])
// //if key is of two names then we can not use .operator here,[] compulsory

// console.log(name3[input])     
// //. can not b used here, dont use '' for input as it is not a property of object







// let laptop ={
//     cpu: 'i9',
//     ram: 16,
//     brand: "HP",

//     greet: function(){
//         console.log("hello world")
//     }
// }

// laptop.greet();