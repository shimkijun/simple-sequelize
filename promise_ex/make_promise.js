const wait1secconds = new Promise( (resolve,reject) => {
    // resolve( console.log('use'));
    reject(console.log("error"))
})

wait1secconds.then(() =>{
    console.log("result")
})