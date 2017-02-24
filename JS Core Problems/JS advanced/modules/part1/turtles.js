class Turtle{
    constructor(name,age,gender){
        if(new.target===Turtle){
            throw new Error;
        }
        this._name=name;
        this._age=Number(age);
        this._gender=gender;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get gender(){
        return this._gender;
    }
    grow(age){
        this._age+=age;
    }
    toString(){
        return `Turtle: ${this._name}\nAged - ${this._age}; Gender - ${this._gender}`
    }
}
class WaterTurtle extends Turtle{
    constructor(name,age,gender, waterPool){
        super(name,age,gender);
        this._waterpool=waterPool;
    }
    get currentWaterPool(){
        return this._waterpool;
    }
    travel(waterPool){
        this._age+=5;
        this._waterpool=waterPool;
    }
    toString(){
        return super.toString()+`\nCurrently inhabiting ${this.currentWaterPool}`
    }
}
class GalapagosTurtle extends Turtle{
    constructor(name,age,gender){
        super(name,age,gender);
        this._thingsEaten=[];
    }
    get thingsEaten(){
        return this._thingsEaten;
    }
    eat(food){
        this._thingsEaten.push(food);
    }
    grow(age){
        this._thingsEaten=[];
        this._age+=age;
    }
    toString(){
        return super.toString()+`\nThings, eaten this year: ${this._thingsEaten.join(', ')}`
    }

}
class EvkodianTurtle extends Turtle{
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
class NinjaTurtle extends Turtle{
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
        let result=`\n${this._name.substr(0,3)} wears a ${this.maskColor}, and is `;
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
let testWaterTurtle = new WaterTurtle("Michelangelo", 18, "male", "Sewer");
let testGalapagosTurtle = new GalapagosTurtle("Raphael", 18, "male");
let testEvkodianTurtle = new EvkodianTurtle("Donatello", 18, "male", 100);
let testNinjaTurtle = new NinjaTurtle("Leonardo", 18, "male", "Blue", "Yamato");

console.log(testWaterTurtle.toString());
// Turtle: Michelangelo
// Aged - 18; Gender - male
// Currently inhabiting Sewer

console.log(testGalapagosTurtle.toString());
// Turtle: Raphael
// Aged - 18; Gender - male
// Things, eaten this year:

console.log(testEvkodianTurtle.toString());
// Turtle: Donatello
// Aged - 18; Gender - male
// Evkodium: 5400

console.log(testNinjaTurtle.toString());
// Turtle: Leonardo
// Aged - 18; Gender - male
// Leo wears a Blue mask, and is an apprentice with the Yamato.
