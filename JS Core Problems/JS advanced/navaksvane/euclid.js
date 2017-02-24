function gcd(num1,num2) {
    if(num2==0){ return num1;}
    else {
        var remainder = num1%num2;
        return gcd(num2,remainder);
    }
}