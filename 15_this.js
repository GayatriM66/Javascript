
let laptop = {
   cpu: 'i7',
   ram: 4,
   brand: 'Dell',
   getConfig: function () {
      console.log(laptop.cpu)
   },
  comparison: function(other){
      if(this.cpu>other.cpu){
         console.log(this.cpu)
      }
      else{
         console.log(other.cpu)
      }
   }
}

let laptop1 = {
   cpu: 'i8',
   ram: 8,
   brand: 'hp',
   getConfig: function () {
      console.log(laptop.cpu);//above object method 
      console.log(this.cpu);//this object will print the current object
   }
}
//console.log(laptop1.getConfig())
laptop.comparison(laptop1);