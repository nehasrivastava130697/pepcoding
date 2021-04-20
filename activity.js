let fs = require('fs');
let path = require('path');
let extensions ={
    "Images":[".jpeg",".jpg",".png"],
    "Videos":[".mp4",".mkv"],
    "Documents":[".pdf",".txt"],
    "Compressed":[".rar",".zip"],
    "Audio":[".mp3"]
}
 let input = process.argv.slice(2);

let folderPath = input[0];
console.log(input[0]);
let extFolderPath=folderPath;
function createFolder()
{
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr = extensions[key];
        let eon = arr.includes(extension);
        if(eon==true)
        {
           // console.log(key);
            extFolderPath=path.join(folderPath,key);
            console.log(extFolderPath);
                break;
        }
    }
    return fs.existsSync(extFolderPath);
}
let content = fs.readdirSync(input[0]);
for(let i=0;i<content.length;i++)
{
    //console.log(content[i]);
    //extensions
   // console.log(path.extname(content[i]));
    let extensionName=path.extname(content[i]);
    let extensionFolderExist=checkFolder(extensionName,folderPath);
   //console.log(extensionFolderExist);
   if(extensionFolderExist==false)
   {
       createFolder();
       fs.moveFileSync(content[i],extFolderPath);
   }
   else
   {
    fs.moveFileSync(content[i],extFolderPath);
   }
}
