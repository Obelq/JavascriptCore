function modifyAverage([n]) {
    function checker5(number) {
        let sum=0;
        for (let i = 0; i < number.length; i++) {
            sum+=Number(number[i]);
        }
        let avgVal = sum/number.length;
        if (avgVal>5) return true;
        else return false;
    }
    while(true){
        if(checker5(n))return n;
        else n+='9';
    }
    
}
console.log(modifyAverage(["101"]));