#!/usr/bin/env node


//const fs is now a object which have all the functionality includes in file sysytem
const fs = require('fs')   //file system at  node

//fs.readdir(path[,options],callback) 
// where callback have 2 arguements i.e-(err,files)
 //readir reads the content of the directory
 //cwd-path of (current working directory)
fs.readdir(process.cwd(),(err,filenames)=>{       
  //EITHER
  //err=== an error object,which means somthing went wrong
  //OR
  //err===null,which means no error!

  if(err){
      //error handling code
       console.log(err);
    }
     
});  