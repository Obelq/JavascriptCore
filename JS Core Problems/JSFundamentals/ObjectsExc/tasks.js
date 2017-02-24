function sumByTown(input) {
    let obj=new Map();
    for(let i of input){
        let pieces = i.split(' -> ');
        pieces[2]=pieces[2].split(' : ').map(Number).reduce((a,b)=>a*b,1);
        let [town, product,income]=[pieces[0],pieces[1],pieces[2]];
        if(!obj.has(town)){
            obj.set(town,new Map());
        }
        let oldIncome=obj.get(town).get(product);
        if(oldIncome)income+=oldIncome;
        obj.get(town).set(product,income);
    }
    for(let [k,v] of obj){
        console.log(`Town - ${k}`);
        for(let [key,val] of v){
            console.log(`$$$${key} : ${val}`);
        }

    }


}
sumByTown([
`Sofia -> Laptops HP -> 200 : 2000`,
`Sofia -> Raspberry -> 200000 : 1500`,
`Sofia -> Audi Q7 -> 200 : 100000`,
`Montana -> Portokals -> 200000 : 1`,
`Montana -> Qgodas -> 20000 : 0.2`,
`Montana -> Chereshas -> 1000 : 0.3`
]);