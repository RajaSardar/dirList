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

const dirListByString = (dir_String_multiline_or_single,add_Extention_Without_Dot="") => {
    if(!dir_String_multiline_or_single) {
        console.log("Error: pass a valid string");
        return;
    };
    dir_String_multiline_or_single = dir_String_multiline_or_single.toString().replace(/\s(?=\s)/g,'').replace(/\n/g,' ').trim();
    console.log("Input letter Length :",dir_String_multiline_or_single.length);
    console.log("Input Word List :",dir_String_multiline_or_single);
    const cd = dir_String_multiline_or_single.split(" ");
    if(add_Extention_Without_Dot) {
        const ef = cd.map(e=> e+'.'+add_Extention_Without_Dot);
        console.log("Output Word length :",ef.length);
        console.log("Output :",ef.join(" "));
    }
    else{
        console.log("Input length :",cd.length);
    }
}

exports.dirListByString = dirListByString;
exports.dirList = dirList;
