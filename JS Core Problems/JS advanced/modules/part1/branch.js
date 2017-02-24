import { Employee } from './employee';
export class Branch{
    constructor(id, branchName, companyName){
        this.id=Number(id);
        this.branchName=branchName;
        this.companyName=companyName;
        this._employees=[];
    }
    get employees(){
        return this._employees;
    }
    hire(employee){
            this._employees.push(employee);
        
    }
    toString(){
       let result = `@ ${this.companyName}, ${this.branchName}, ${this.id}\nEmployed:\n`
        if(this._employees.length==0){
            result+=`None...`
        } else {
            for(let i of this._employees){
                result+=`** ${i.toString()}\n`;
            }
        }
        return result.trim();
    }
}