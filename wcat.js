let fs = require("fs");
let input = process.argv.slice(2);
console.log("Input",input);
let options = [];
let filePaths = [];
for(let i = 0 ;i<input.length;i++)
{
    if(input[i]=="-s"||input[i]=="-b"||input[i]=="-n")
    {
        options.push(input[i]);
    }
    else
    {
       filePaths.push(input[i]);
    }
}
console.log("options",options);
console.log("filePaths",filePaths);
for(let i = 0;i<filePaths.length;i++)
{
    let isFilePresent = fs.existsSync(filePaths[i]);
     if(isFilePresent == false)
     {
         console.log("filepath",filePaths[i],"does not exist");
         return;
     }
}
  let totalContent = "";
    for(let i = 0;i<filePaths.length;i++)
    {
        let content = fs.readFileSync(filePaths[i],"utf-8");
        totalContent+=content+"\r\n";
        
    }
    console.log(totalContent);
 for(let i = 0;i<options.length;i++)
 {
     if(options[i]=="-s")
     { let outputArr = totalContent.split("\r\n");
    // console.log(outputArr);
       
       let tempArr = [];
       for(let i = 0;i<outputArr.length;i++)
       {
           if(outputArr[i]!=="")
          
           {
               tempArr.push(outputArr[i]);
           }
       }
       totalContent  = tempArr.join("\r\n");
       
    }
    console.log(totalContent);
 }
    let isN = options.includes("-n");
    let isB = options.includes("-b");
    let finalOption;
    if(isN==true)
    {
        if(isB==true)
        {
            let idxB = options.indexOf("-b");
            let idxN = options.indexOf("-n");
            finalOption = idxB < idxN ? "-b" : "-n";

        }
        else
        {
            finalOption = "-n";
        }
    }
    else  if(isB==true)
    {
        finalOption = "-b";
    }
      
      if (finalOption=="-n")
     {   
         
        let contentArr= totalContent.split("\r\n");
        let tempArr = [];
        let count = 1;
         for(let i = 0;i<contentArr.length;i++)
         {
          
           tempArr[i]=count + "." + contentArr[i];
           count++;
         
         }
         
         totalContent = tempArr.join("\r\n");
         console.log(tempArr);
     }
       //console.log(totalContent);
      
      if(finalOption=="-b")
     {
        let contentArr2= totalContent.split("\r\n");
        let tempArr = [];
        let count = 1;
        for(let i = 0;i<contentArr2.length;i++)
        {
           
            if(contentArr2[i]!="")
              {tempArr[i]=count + ". " + contentArr2[i];
               count++;
              }
              
           
        
        }
        totalContent = contentArr2.join("\r\n");
    
        
        
        //console.log(tempArr);
     }
    console.log(totalContent);
     
    

 
 

