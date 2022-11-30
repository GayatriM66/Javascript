let num = [22, 4, 55, 8];

let result = num.filter(n => n % 2 === 0)  //22,4,8
    .map(n=>n*2)                        //22*2,4*2,8*2
   .reduce((acc,el)=>acc+el);           //44+8+16=68
   console.log(result);
   