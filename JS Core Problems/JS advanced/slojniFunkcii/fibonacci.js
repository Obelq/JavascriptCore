function fibonacci(n) {
    let fib = (()=>{
        let f0=0,f1=1;
        return ()=>{
            let oldf0=f0,oldf1=f1;
            f0=oldf1;
            f1=oldf0+oldf1;
            return oldf1;
        }

    })();
    let fibNums = [];
    for (let i = 0; i < n; i++) {
        fibNums.push(fib());
    }
    return fibNums;
}
console.log(fibonacci(5));