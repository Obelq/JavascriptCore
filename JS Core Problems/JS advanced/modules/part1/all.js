class BaseElement{
    constructor(){
        if(new.target===BaseElement){
            throw new Error;
        }
        this.element=null;
    }
    appendTo(selector){
        this.createElement();
        $(selector).append(this.element)
    }
    createElement(){
        this.element=this.getElementString();
    }
    getElementString(){

    }
}
class TitleBar extends BaseElement{
    constructor(title){
        super();
        this.title=title;
        this.links=[];
    }
    addLink(href, name){

    }
    getElementString(){
        let result = `<header class="header">
    <div><span class="title">${this.title}</span></div>
        <div>
        <nav class="menu">\n`;
        result+=this.links.join('|\n');
        result+=`\n</nav>
    </div>
</header>
`;
        return $(result);
    }
}