function lowestPrice(input) {
    let obj = new Map();
    for(let i of input){
        let [town,product,price]=i.split(' | ');
        price=Number(price);
        if(!obj.has(product))obj.set(product,new Map());
        obj.get(product).set(town, price);

    }
    for(let [product,cenoGrad] of obj){
        let prices = Array.from(cenoGrad.keys());
        let minPrice = 100000000000;
        let grad='';
        for(let [town,price] of cenoGrad){
            if(price<minPrice){
                minPrice=price;
                grad=town;
            }
        }
        console.log(`${product} -> ${minPrice} (${grad})`);
    }
}
lowestPrice([
    `Sofia City | Audi | 100000`,
    `Sofia City | BMW | 100000`,
    `Sofia City | Mitsubishi | 10000`,
    `Sofia City | Mercedes | 10000`,
    `Sofia City | NoOffenseToCarLovers | 0`,
    `Mexico City | Audi | 1000`,
    `Mexico City | BMW | 99999`,
    `New York City | Mitsubishi | 10000`,
    `New York City | Mitsubishi | 1000`,
    `Mexico City | Audi | 100000`,
    `Washington City | Mercedes | 1000`
]);