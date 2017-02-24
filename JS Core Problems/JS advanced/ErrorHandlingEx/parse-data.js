function makeCandy(input) {
    function checker(top,fill,spice) {
        const toppings = ['milk chocolate', 'white chocolate', 'dark chocolate',''];
        const fillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
        if(!toppings.includes(top)){
            throw new TypeError;
        }
        if(fill[0]!=''||fill!='') {
            if (fill.length > 3) {
                throw new TypeError;
            }
            if (fill.length > 0) {
                for (let i of fill) {
                    if (!fillings.includes(i)) {
                        throw new TypeError;
                    }
                }
            }
        }
        if(spice=='poison'||spice=='asbestos'){
            throw new TypeError;
        }
    }
    class Candy{
        constructor(topping, filling, spice){
            checker(topping, filling, spice);
            if(topping==''){
                topping=null;
            }
            if(filling[0]===''){
                filling=null;
            }   else {
                filling=filling.join(',')
            }

            if(spice==''){
                spice=null;
            }
            this.topping=topping;
            this.filling=filling;
            this.spice=spice;
        }
    }
    let candies = [];
    for(let i of input){
        let three = i.split(':');
        if(three.length==3){
            try{
                candies.push(new Candy(three[0],three[1].split(','),three[2]));

            } catch(error) {

            }
        }
    }
    return candies;
}
console.log(makeCandy([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
]));
