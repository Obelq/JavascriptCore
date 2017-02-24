export class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    addToSelector(selector){
        let element = $(`<div class="person ${this.name}">
<p class="name">${this.name}</p>
<p class="age">${this.age}</p>
<div class="posts ${this.name}"></div>
</div>`);
        $(selector).append(element);
    }
}