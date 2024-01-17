function Alien(name, tech){
    this.name=name;
    this.tech=tech;
    //return this ; is already there we can not see this

    this.work =function(){
        console.log("solving bugs of",this.name);
    }
 }

let alien1= new Alien('navin','js');
let alien2= new Alien('kiran','java');
console.log(alien1);
console.log(alien2);

alien1.work();
alien2.work();