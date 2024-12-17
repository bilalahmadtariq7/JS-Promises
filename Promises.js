const fs = require("fs") //import file system library for reading and writing in file

function fileFunc(){
  const p =  new Promise(function(resolve){  //promise always take function as an argument
    fs.readFile("D:\\Web 3.0\\Web 2.0\\JS\\Promises and async await\\a.txt", "utf-8", function(err,data){
      resolve(data) // send the data to Done function when the .then is called otherwise it's status will remain pending 
    })
  });
  return p;

}

function Done(n){
  console.log(n)
}

const a = fileFunc()
a.then(Done)
