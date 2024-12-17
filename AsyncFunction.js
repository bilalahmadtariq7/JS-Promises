const fs = require("fs")

fs.readFile("D:\\Web 3.0\\Web 2.0\\JS\\Promises and async await\\a.txt","utf-8",function(err,data){
    
    console.log(data);

})

console.log("HAHAHA") // it is run first because reading file take time so it transfer the thread to this line to execute