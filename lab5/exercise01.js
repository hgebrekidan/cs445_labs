function isPrime(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            for(let i=2;i<num;i++){
                if(num%2===0){
                    reject({prime: false})
                }
            }
            resolve({prime: "It is prime"});
        }, 500);
    });
};
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');


