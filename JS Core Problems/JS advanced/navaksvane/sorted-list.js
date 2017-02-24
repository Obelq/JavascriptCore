function result() {
    let collection = [];
    return {
        add:function (element){
            collection.push(element);
            this.size++
            return collection.sort((a,b)=>a-b);

        },
        remove:function (index){
            if(index<0||index>collection.length-1){
                return;
            }
            collection.splice(index,1);
            this.size--;
            return collection.sort((a,b)=>a-b)
        },
        get:(index)=>{
            if(index<0||index>collection.length-1){
                return;
            }
            return collection[index];
        },
        size:0
    }
}
let myList =result();
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.size);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));
