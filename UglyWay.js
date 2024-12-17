const fs = require("fs")

function fileFunc(fn){
    fs.readFile("D:\\Web 3.0\\Web 2.0\\JS\\Promises and async await\\a.txt","utf-8",function(err,data){
    
    fn(data)

})
}

function onlyData(d){
    console.log(d)
}

fileFunc(onlyData)