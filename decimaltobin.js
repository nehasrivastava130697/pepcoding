
let pv=1,rem=0 ;
let decimal = 20;
let binary = 0;
function dtb(decimal)
  {
    while(decimal>0)
   {
      rem =  decimal%2 ;
      binary += pv*rem;
      pv*=10;
      decimal=Math.floor(decimal/2);
      
 

   }
    
   return binary;
}
let ans=dtb(decimal);
console.log(ans);



  