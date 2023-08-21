"User Strict";

let regularFunction = ()=>{
    return "Hello Shivam ";
}

// let timeoutFunction = msg => {
//     var returnMsg;
//     setTimeout( ()=>{
//         console.log("Input 1st msg to timeoutFunction", msg);
//         returnMsg = msg + "World";
//         console.warn("timeoutFunction 1st has constructed returnMsg", returnMsg);
//         return returnMsg
//     }, 10000);
// }

let followUpFunction = msg =>{
    console.log("followUp timeout return msg", msg);
}

// console.log("Before any function call...");
// var regularReturn = regularFunction();
// var timeoutReturn = timeoutFunction(regularReturn);
// followUpFunction(timeoutReturn);

// //////////////////////////////////////////////////////
// let timeoutFunctionCallback = (msg, callback) =>{
//     var returnMsg;
//     setTimeout(() => {
//         console.log("Input 2nd msg to timeout function", msg);
//         returnMsg = msg + "World11"
//         console.warn("TimeoutFunctionCallback 2nd has constructed returnMsg", returnMsg);  
//         return returnMsg   
//     }, 1000);
//     callback(returnMsg)
// }
// console.log("Before callback...");
// var regularReturn = regularFunction();
// timeoutFunctionCallback(regularReturn, regularFunction);

// ///////////////////////////////////////////////////////

let timeoutFunctionPromise = msg =>{
    return new Promise(resolve =>{
        var returnMsg;
        setTimeout(() => {
            console.log("Input 3rd msg to timeout function Promise", msg);     
            returnMsg = msg + "Ok Promise";
            console.warn("TimeoutFunctionPromise 3rd has constructed returnMsg", returnMsg);       
            resolve(returnMsg);
        }, 1000);
    })
}
console.log("The Promise Second Round Of Function Calls...");
var regularReturn = regularFunction();
timeoutFunctionPromise(regularReturn)
.then((timeoutReturn) => {
    followUpFunction(timeoutReturn);
});
