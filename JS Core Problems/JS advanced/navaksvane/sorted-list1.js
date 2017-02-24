function result() {
    let collection = [];
    return {
        add:(element)=>{
            collection.push(element);
            console.log(this);
            this.size++
            return collection.sort((a,b)=>a-b);

        },
        remove:(index)=>{
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
