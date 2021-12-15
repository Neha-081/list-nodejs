#!/usr/bin/env node


//const fs is now a object which have all the functionality includes in file sysytem
const fs = require('fs');   //local file system at  node
const util=require('util');   //get all info of file
const chalk = require('chalk');  //for giving colors to filename and folders
const path = require('path');   

const {lstat}=fs.promises;
const targetDir=process.argv[2] || process.cwd();  //argv-array of info how program was executed


//fs.readdir(path[,options],callback) 
// where callback have 2 arguements i.e-(err,files)
 //readir reads the content of the directory
 //cwd-path of (current working directory)
fs.readdir(targetDir,async(err,filenames)=>{       
  //EITHER
  //err=== an error object,which means somthing went wrong
  //OR
  //err===null,which means no error!

  if(err){
      //error handling code
       console.log(err);
    }
    const statPromises=filenames.map(filename=>{
        return lstat(path.join(targetDir,filename))   //join the target folder and appended file,by this we can see all folders and file anywhere by nls ..
        //stat of that file in current directory
    });
 const allStats= await Promise.all(statPromises)
for(let stats of allStats){
const index=allStats.indexOf(stats);

    //folders will be bold
if(stats.isFile()){
    console.log(filenames[index]);
}else{
    console.log(chalk.red.bold(filenames[index]));
}
}   
});  




//dependencies-
//chalk