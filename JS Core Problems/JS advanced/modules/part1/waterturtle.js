import { Turtle } from './turtle'
export class WaterTurtle extends Turtle{
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