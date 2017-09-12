var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Argument must be numbers');
            }

        }, 1500);

    });
};

asyncAdd(1,'2').then((result)=>{
    console.log(result);
    return asyncAdd(result,330);
}).then((res)=>{
    console.log(res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('It worked');
//         reject('Unable to fullfill promise')
//     }, 2000);
    
// });

// somePromise.then((message) => {
//     console.log('success: ', message);
// }, (errorMessage)=> {
//     console.log('Error:', errorMessage);
// });

