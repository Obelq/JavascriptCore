function dnaHelix([n]) {
    n=Number(n);
    let counter = 0;
    let structure = 'ATCGTTAGGG';
    let incChecker = true;
    let decChecker = false;
    let looper = 0;
    for (let i = 0; i < n; i++) {
        let a=structure[counter%10];
        counter++;

        let b=structure[counter%10];
       counter++;
        if(looper==0){

            console.log(`**${a}${b}**`);
        }
        else if (looper==1){
            console.log(`*${a}--${b}*`);
        }
        else if (looper==2){
            console.log(`${a}----${b}`);
        }
        if(incChecker){
            looper++;
            if (looper==2){
                incChecker=false;
                decChecker=true;
            }
        }
        else if (decChecker){
            looper--;
            if (looper==0){
                incChecker=true;
                decChecker=false;
            }
        }
    }
}
dnaHelix(['4']);