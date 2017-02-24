(function () {
    String.prototype['ensureStart']=function (str) {
        if(this.substr(0,str.length)!=str){
            let result = ''+str+this;
            return result;
        }
        let item='' +this;
        return item;
    }
    //pesho 5-2
    String.prototype['ensureEnd']=function (str) {
        if(this.substr(this.length-str.length)!=str){
            let result = ''+this+str;
            return result;
        }
        let item='' +this;
        return item;
    }
    String.prototype['isEmpty']=function () {
        return this.length==0;
    }
    String.prototype['truncate']=function (n) {
        if(this.length<=n){
            let item='' +this;
            return item;
        } else {
            let arr = this.split(' ');
            let result=arr.shift();
            for(let i of arr){
                if((result+i).length>n-4){
                    break;
                }
                result+=' '+i;
            }
            result+='...';
            return result;
        }
    }
    String['format']=function (string,...params) {
        let regex=/{([0-9]+?)}/g;

        let match;
        while(match=regex.exec(string)){
            string=string.replace(match[0],arguments[Number(match[1])+1])
        }
        return string;
    }
})();