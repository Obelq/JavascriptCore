function solve() {
    class Keyboard{
        constructor(manufacturer,responseTime){
            this.manufacturer=manufacturer;
            this.responseTime=Number(responseTime);
        }
    }
    class Monitor{
        constructor(manufacturer,width,height){
            this.manufacturer=manufacturer;
            this.width=Number(width);
            this.height=Number(height);
        }
    }
    class Battery{
        constructor(manufacturer,expectedLife){
            this.manufacturer=manufacturer;
            this.expectedLife=Number(expectedLife);
        }
    }
    class Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
            if(new.target===Computer){
                throw new Error;
            }
            this.manufacturer=manufacturer;
            this.processorSpeed=Number(processorSpeed);
            this.ram=ram;
            this.hardDiskSpace=hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight=weight;
            this.color=color;
            this._battery=battery;
        }
        set battery(bat){
            if(!(bat instanceof Battery)){
                throw new TypeError;
            }
            this._battery = bat;
        }
        get battery(){
            return this._battery;
        }

    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,key,mon){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this._keyboard = key;
            this._monitor = mon;
        }
        set keyboard(bat){
            if(!(bat instanceof Keyboard)){
                throw new TypeError;
            }
            this._keyboard = bat;
        }
        get keyboard(){
            return this._keyboard;
        }
        set monitor(bat){
            if(!(bat instanceof Monitor)){
                throw new TypeError;
            }
            this._monitor = bat;
        }
        get monitor(){
            return this._monitor;
        }


    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }

}