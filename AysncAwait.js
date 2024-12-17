const fs = require("fs")

function fileFunc(){
    const p = new Promise(function(resolve){
        fs.readFile("D:\\Web 3.0\\Web 2.0\\JS\\Promises and async await\\a.txt",
      "utf-8",
      function (err, data) {
        resolve(data);
      })
    })
    return p
}

async function main() {
    const val = await fileFunc()
    console.log(val)
}

main()