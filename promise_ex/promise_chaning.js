const p1 = new Promise ( (resolve, reject) =>{
    setTimeout (()=>{
        resolve({ p1 : "p1"});
    },1000)
})

const p2 = new Promise ( (resolve, reject) =>{
    setTimeout (()=>{
        resolve({ p2 : "p2"});
    },3000)
})

p1.then((result)=>{
    console.log(result.p1);
    return p2;
}).then((result2)=>{
    console.log(result2.p2)
})

Promise.all( [p1,p2] ).then( (result) => {
    console.log(result[0].p1,result[1].p2)
}).catch(err =>{
    console.log(err)
})
