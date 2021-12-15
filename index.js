#!/usr/bin/env node


//const fs is now a object which have all the functionality includes in file sysytem
const fs = require('fs');   //file system at  node
const util=require('util');   //get all info of file


const {lstat}=fs.promises;

//fs.readdir(path[,options],callback) 
// where callback have 2 arguements i.e-(err,files)
 //readir reads the content of the directory
 //cwd-path of (current working directory)
fs.readdir(process.cwd(),async(err,filenames)=>{       
  //EITHER
  //err=== an error object,which means somthing went wrong
  //OR
  //err===null,which means no error!

  if(err){
      //error handling code
       console.log(err);
    }
    const statPromises=filenames.map(filename=>{
        return lstat(filename)
    });
 const allStats= await Promise.all(statPromises)
for(let stats of allStats){
const index=allStats.indexOf(stats);

console.log(filenames[index],stats.isFile());
}
    




     
});  