let f=(function solve() {
    let counter = 0;
    return class Extensible{
        constructor(){
            this.id=counter++;
        }
        extend(template){
            for(let i in template){
                if(typeof template[i]=='function'){
                    Object.getPrototypeOf(this)[i]=template[i];
                } else{
                    this[i]=template[i];
                }
            }
        }
    }
})();

let obj1 =new f();
let obj2 =new f();
let obj3 =new f();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
var template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};
obj1.extend(template);
console.log(obj1);