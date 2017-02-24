class Textbox {
    constructor(selector,regex){
        this.selector=selector;
        this._elements=[];
        this._invalidSymbols=regex;
        this._value='';
        let that =this;
        $(selector).on('input change',function () {
            let value = $(this).val();
            $(that.selector).val(value);
            that.value = value;
        })
    }
    get value(){
        return $(this.selector).val();
    }
    set value(v){
        this._value=v;
        $(this.selector).val(v);
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        return !this._invalidSymbols.test($(this.selector).val());
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
