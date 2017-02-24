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
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.links.push(link);
    }
    getElementString(){
        let nav = $('<nav>')
            .addClass('menu');

        let first = true;
        this.links.forEach(e => {
            if (first) {
                nav.append(e);
                first = false;
            } else {
                nav.append('|');
                nav.append(e);
            }
        });

        return $('<header>')
            .addClass('header')
            .append($('<div>')
                .append($('<span>')
                    .addClass('title')
                    .text(this.title)))
            .append($('<div>')
                .append(nav));
    }
}
class Footer extends BaseElement{
    constructor(message){
        super();
        this.message=message;
    }
    getElementString(){
        let footer = $('<footer>').text(`Copyright &copy; ${this.message}`);
        return footer;
    }
}
class Article extends BaseElement{
    constructor(title, content){
        super();
        this.title=title;
        this.content=content;
        this.timestamp = new Date();
    }
    getElementString() {
        return $(`<div class="article">
    <div class="article-title">${this.title}</div>
    <p>${this.content}</p>
</div>
`);
    }

}
class ImageArticle extends Article{
    constructor(title, content, image){
        super(title, content);
        this.image=image;
    }
    getElementString() {
        return $(`<div class="article">
    <div class="article-title">${this.title}</div>
    <div class="image"><img src="${this.image}"></div>
    <p>${this.content}</p>
</div>
`);
    }
}
class TableArticle extends Article{
    constructor(title, content){
        super(title, content);
        this.headings=null;
        this.data=null;
    }
    loadData(headings, data){
        this.headings=headings;
        this.data=data;
    }
    getElementString() {
        let div = $('<div class="table"></div>');
        let table = $('<table class="data"></table>');
        let hr = $('<tr>');
        for(let i of this.headings){
            hr.append($('<th>').text(i));
        }
        table.append(hr);
        for(let r of data){
            let row = $('<tr>');
            for(let key in r){
                row.append($('<td>').text(r[key]));
            }
            table.append(row);
        }
        div.append(table);
        return super.getElementString().find('p').append(div);
        
    }

}
let tbar = new TitleBar('Modular DOM');
tbar.addLink('/', 'Home');
tbar.addLink('about', 'About');
tbar.addLink('results', 'Results');
tbar.addLink('faq', 'FAQ');
tbar.appendTo('#head');
let footer = new Footer('2016 The Shoemaker Company');
footer.appendTo('#wrapper');
let a1 = new ImageArticle('What is Lorem Ipsum?', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'src/lorem.png');
a1.appendTo('#content');

let a2 = new Article('Where does it come from?', `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`);
a2.appendTo('#content');
let data = [
    { orderid: 'CRA9938',
        status: 'delivered',
        shipto: 'Baku',
        latlong: '53.80 33.21' },
    { orderid: 'KNQ5876',
        status: 'processing',
        shipto: 'Yerevan',
        latlong: '50.25 31.37' },
    { orderid: 'JZH6615',
        status: 'processing',
        shipto: 'London',
        latlong: '54.74 -1.79' },
    { orderid: 'FMU7330',
        status: 'delivered',
        shipto: 'Brussels',
        latlong: '63.22 34.78' }];

let a3 = new TableArticle('Why do we use it?',"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
a3.loadData(['Order ID', 'Status', 'Ship To', 'Lat Long'], data);
a3.appendTo('#content');
