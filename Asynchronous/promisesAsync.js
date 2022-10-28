let a = 10;
let b = 0;


// promises are used to handle async tasks..............................
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    },2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a+b);
})