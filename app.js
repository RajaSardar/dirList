//requiring path and fs modules
// const path = require('path');
const fs = require('fs');
//joining path of directory 
// const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
const dirList = (directory_String, add_Extention='') =>{
    let listDir = [];
    fs.readdir(directory_String, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        
         files.forEach(function (file) {
            listDir.push(file.toString())
        })
        if(add_Extention){
            let fileString = listDir.map(e=> e+add_Extention)
            console.log(fileString.join(" "));
        }else{
            console.log(listDir.join(" "));
        }
        // return listDir
        
    })

    
    // console.log(listDir);
}

module.exports = dirList;