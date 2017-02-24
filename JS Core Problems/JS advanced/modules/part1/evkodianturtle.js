import { Turtle } from './turtle';
export class EvkodianTurtle extends Turtle{
    constructor(name,age,gender,value){
        super(name,age,gender);
        this.ekvodiumValue=Number(value);
    }
    get evkodium(){
        let density=this._age;
        if(this._gender=='male'){
            density*=3;
        } else{
            density*=2;
        }
        return {value: this.ekvodiumValue, density: density};
    }
    toString(){
        return super.toString()+`\nEvkodium: ${this.evkodium.density*this.ekvodiumValue}`
    }
}