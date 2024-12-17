function promisified() {
    // Creating two promises
    let p1 = new Promise(function(resolve) {
      setTimeout(() => resolve("Promise 1 resolved"), 1000);
    });
  
    let p2 = new Promise(function(resolve){
      setTimeout(() => resolve("Promise 2 resolved"), 2000);
    });
  
    return [p1, p2];
  }
  
  let x = promisified();
  
  // Using Promise.all
  Promise.all(x)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });
  