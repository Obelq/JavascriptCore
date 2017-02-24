class Checkbox{
    constructor(label, selector){
        this._label=label;
        this._elements=$(selector);
        this._value=$(selector).is(':checked');
        let that = this;
        $(selector).change(function () {
            that._value=$(selector).is(':checked');
        })
    }
    get label(){
        return this._label;
    }
    get elements(){
        return this._elements;
    }
    get value(){
        return this._value;
    }
    set value(val){
        if(typeof val==Boolean){
            throw new Error
        }
        this._value=val;
        $(this._elements).prop('checked',this._value);
    }
}
class Numberbox{
    constructor(label, selector, minValue, maxValue){
        this._label=label;
        this._elements=$(selector);
        this.minValue = minValue;
        this.maxValue = maxValue;
        this._value=minValue;
        $(selector).change(function () {
            this._value=$(this).val();
        })
    }
    get label(){
        return this._label;
    }
    get elements(){
        return this._elements;
    }
    get value(){
        return this._value;
    }
    set value(val){
        if (Number(val) < this.minValue || Number(val) > this.maxValue) {
            throw new Error('Passed in value is out of range');
        }
        this._value=val;
        $(this._elements).val(val);
    }
}
let check = new Checkbox("Is Married:","#married");
let number = new Numberbox("Age:","#age",1,100);
let checkbox = $('#married');
let numberbox = $('#age');
checkbox.on('change',()=>console.log(check.value));
numberbox.on('change',()=>console.log(number.value));