let a =10
a=30
 let b=20
b=a
b=b+5
console.log(a)
console.log(b)


const y=45
console.log(y)
//y=30

//------array-------------
let names= ["amol","ram", "sham"]
console.log(names[0])  //amol
console.log(names[1])  //ram
console.log(names[2])  //sham

//human ---->object--------->properties and methods :
//-------------------property------->age,weight, height, color
//-------------------methods-------->talk(), walk(), eat()

//vehicle--->object------->properties and methods  :
//-----------property----------->color,regno,model number,vehicle_name
//-----------method-------------->start(), stop()

//bank account ----> object----->properties and method  :
//------------------properties--->acholder_name,accnumber,balance
//------------------methods------>withdrawl(), deposit()

//       array--->properties and methods
//           0  1  2  3
let numbers=[11,22,33,44]
let aa=numbers.length
console.log(aa)
console.log(numbers)  //this will print full array
console.log(typeof aa) //number
console.log(numbers[numbers.length-1])//(4-1) 3rd index, ie 44 number.

///         array2
//                0       1        2        3
let lastName=["sharma","mishra","gupta","deshmukh"]
console.log(lastName.length)
//console.log(lastName[0])         //sharma

//------------loop
//print all elements in forward order
console.log("\n forward order")
for(i=0;i<4;i++)
{
    console.log(lastName[i])    //name
}

//print all elements in reverse order
console.log("\n reverse order")
for(let i=lastName.length-1;i>=0;i--)
{
   // console.log(i)
    console.log(lastName[i])
}

//------fruits[]------------array defined
let fruits = ["apple","banana","kiwi","pineapple"]

//----push()-------add element at end
let cc=fruits.push("papaya") // papaya will get added at the end
console.log("\n","element",fruits[fruits.length-1],"is push()")
console.log(fruits)
//cosole.log(cc)/// length of array

//-----pop()------removes end element
let dd= fruits.pop() 
console.log("\n","element ",dd, "is pop()")
console.log(fruits)

//-----unshift()---adds element at the beginning of the array
let ee=fruits.unshift("strawberry")
console.log("\n\nunshift() added",fruits[0]," element at the begenning of the array")
console.log(fruits)

//------shift()----removes the first element of the array
let ff=fruits.shift()
console.log("\n\nshift() removes first element of array i.e. ",ff)
console.log(fruits)

//----indexof()----------search for element and returns its index
let gg=fruits.indexOf("guava")// -1 if element not available
console.log("\n","indexof() guava is ",gg, "as it is not in the fruit list")
let hh=fruits.indexOf("kiwi")//1
console.log("indexof() kiwi is ",hh)

//------includes()---------search for the element and return boolean value(true/false)
let ii=fruits.includes("apple")
console.log("\n","includes() returns ",ii,"as the fruit is present in the list")
let jj=fruits.includes("papaya")
console.log("includes() returns ",jj,"as the fruit is absent in the list \n")

//-----reverse()----reverse arrray
let ll=fruits.reverse()
console.log(ll)

//=-------concat()---------joins 2 array
let fruits2= ["Orange"]
let fruits3=fruits.concat(fruits2)
console.log("\n","concat() joins the two array and returns new array", fruits3,"\n")

//------typeof()
console.log("typeof(fruits) is ",typeof(fruits))  // object type
console.log("typeof(y) is ",typeof(y))


//------join()---------joins with 'string given'
let fruitsjoin = fruits.join("**")
console.log("\n","join()** to fruits is ",fruitsjoin)

//=----reverse()------prints array in reverse order
let fruitsrev=fruits.reverse()
console.log("\n",fruitsrev,"reverse() of fruits")

//=--------sort()-------sort by ascending order 
let fruitssort=fruits.sort()
console.log("\n sorted fruits",fruitssort)

//-----slice()--------slice(n1,n2) n1 is starting index, n2 is upto the number of index-1
//last element index is from negative number -1, [.....,-3,-2,-1]
console.log(" \nfruits list is = ",fruits)
let fruitsslice=fruits.slice(2,5)   ///from 2nd to 4th index 
console.log("\n output of slice(2,5)",fruitsslice)
let fruitsslice1=fruits.slice(-4,3) //starting from -4 ie apple,print upto index number 3-1=2 
console.log(fruitsslice1)

//---splice()----------(n1,n2), starts from n1, deleted upto n2 element
let fruitssplice=fruits.splice(2,3)
console.log("\n fruits splice(2,3) is =",fruitssplice,"\n")

//---fill()----fill the remaining elelmnts with mentioned string
let fruitsavailable= fruits.fill("not available",2,15)
console.log("fill(not available 2 15)",fruitsavailable)



//----flat()
let num=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12,13]
]

let newarr=num.flat()
console.log(newarr)