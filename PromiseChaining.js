// use to prevent callback hell

function promsified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
}

promsified(3000).then(function(){
    console.log("Hello")
    return promsified(5000)
}).then(function(){
    console.log("Hello 2")
})

