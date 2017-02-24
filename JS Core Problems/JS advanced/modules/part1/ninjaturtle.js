import { Turtle } from './turtle';
export class NinjaTurtle extends Turtle{
    constructor(name,age,gender,maskColor,weapon){
        super(name,age,gender);
        this.maskColor=maskColor;
        this.weapon=weapon;
        this.level=0;
    }
    grow(age){
        this._age+=age;
        this.level+=age;
    }
    toString(){
        let result=`\n${this._name.substr(0,3)} wears a ${this.maskColor} mask, and is `;
        if(this.level<25){
            result+=`an apprentice with the ${this.weapon}.`
        } else if(this.level<100){
            result+=`smokin strong with the ${this.weapon}.`
        } else{
            result+=`BEYOND GODLIKE with the ${this.weapon}.`
        }
        return super.toString()+result;
    }
}