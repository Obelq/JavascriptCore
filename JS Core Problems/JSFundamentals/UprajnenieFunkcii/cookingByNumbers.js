function cookingByNumbers(arr) {
    let n=Number(arr[0]);

    function action(n,action) {
        switch (action){
            case 'chop': return n/2;
            case 'dice' : return Math.sqrt(n);
            case 'spice': return n+1;
            case 'bake': return n*3;
            case 'fillet': return n*0.8;
        }
    }

    for (let i = 1; i <= 5; i++) {
        n=action(n,arr[i]);
        console.log(n);

    }
}
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);