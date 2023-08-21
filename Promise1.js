let oneFunction = arg =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            var retunVal = arg;
            console.log("oneFunction Produces :", retunVal);
            resolve(retunVal);
        },2000);
    })
}

let twoFunction = arg =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            var retunVal = arg + "Two";
            console.log("twoFunction Produces :", retunVal);
            resolve(retunVal);
        },2000);
    })
}

let ThirdFunction = arg =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            var retunVal = arg + "Three";
            console.log("thirdFunction Produces :", retunVal);
            resolve(retunVal);
        },2000);
    })
}

// let finalFunction = arg =>{
//     return new Promise(resolve =>{
//         oneFunction(arg).then((val)=>{
//             console.log("One val :", val);
//             twoFunction(val).then((val)=>{
//                 console.log("Two Val :", val);
//                 ThirdFunction(val).then((val)=>{
//                     console.log("Final val :", val);
//                 })
//             })
//         }) 
//     })
// }
// finalFunction("One");

let finalFunctionAsync = async arg =>{
    var one = await oneFunction(arg);
    var two = await twoFunction(one);
    var val = await ThirdFunction(two);
    console.log("Final Val :", val);
}
finalFunctionAsync("One");