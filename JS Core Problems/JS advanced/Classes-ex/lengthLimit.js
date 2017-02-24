class Stringer {
    constructor (str, length) {
        this.innerString = str;
        this.innerLength = Number(length);
    }
    decrease(length){
        let dif = this.innerLength-length;
        if(dif<0){
            this.innerLength=0;
        }else {
            this.innerLength-=length;
        }
    }
    increase(length){
        let dif = this.innerLength+length;
        if(dif<=0){

        }  else {
            this.innerLength+=length;
        }
    }
    toString(){
        let stringCopy=''+this.innerString;
        let result = '';
        if(this.innerLength<3){
            return '...';
        } else if(stringCopy.length>this.innerLength){
            result=stringCopy.substr(0,this.innerLength);
            return result+'...';
        } else {
            return ''+this.innerString;
        }
    }
}
let first = new Stringer('Diametur',3);
console.log(first.toString());