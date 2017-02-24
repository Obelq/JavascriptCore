function medenkas(input) {
    let whiteArr =[-1,0];
    let counter=0;
    let darkArr = [-1,0];
    for (let i = 0; i < input.length; i++) {
        let elements = input[i].split(' ');
        let dmg = Number(elements[0])*60;
        let color = elements[1];
        if(color=='dark'){
            if(darkArr[0]==dmg){
               counter++;
            }
            else{
                counter=0
            }
            if(counter==4){
                dmg*=4.5;
                counter=0;
            }
            darkArr[1]+=dmg;
            darkArr[0]=dmg;
        }
        else{
            if(whiteArr[0]==dmg){
                dmg*=2.75;

            }
            whiteArr[1]+=dmg;
            whiteArr[0]=dmg;
        }

    }
    if(darkArr[1]>whiteArr[1]){
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${darkArr[1]}`);
    }
    else{
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${whiteArr[1]}`);
    }

}
medenkas([
    `2 dark medenkas`,
    `1 white medenkas`,
    `2 dark medenkas`,
    `2 dark medenkas`,
    `15 white medenkas`,
    `2 dark medenkas`,
    `2 dark medenkas`

]);
