class SortedList{
        constructor(){
            this.collection=[];
        this.size=0;
        }
        add(element){
            this.collection.push(element);
            this.size++;
            return this.collection.sort((a,b)=>a-b);

        }
        remove(index){
            if(index<0||index>this.collection.length-1){
                return;
            }
            this.collection.splice(index,1);
            this.size--;
            return this.collection.sort((a,b)=>a-b)
        }
        get(index){
            if(index<0||index>this.collection.length-1){
                return;
            }
            return this.collection[index];
        }
    }


