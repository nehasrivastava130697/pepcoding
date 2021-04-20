let arr=[86,2,300,5,10];
let smallest,largest;
function small(arr1)
  {
      smallest=10000;
      largest=-1;
      for(let i =0;i<arr1.length;i++)
      {
          if(arr1[i]<smallest)
          {
              smallest=arr1[i];
          }
          if(arr1[i]>largest)
          {
              largest=arr1[i];
          }

      }
      console.log(smallest+" "+largest);
    }
    small(arr);


     
    
