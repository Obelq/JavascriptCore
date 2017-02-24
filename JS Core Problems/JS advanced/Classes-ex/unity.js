class Rat {
    constructor(name) {
    this.name = name;
    this.rats= [];
    }
    unite(otherRat){
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }
    getRats(){
        return this.rats;
    }
    toString(){
        let result = this.name;
        for(let i of this.rats){
            result+='\n##'+i.name;
        }

        return result;
    }
}
let father = new Rat('Ivan');
let son = new Rat('Pesho');
let sister = new Rat('Lili');
father.unite(son);
father.unite(sister);
console.log(father.getRats);