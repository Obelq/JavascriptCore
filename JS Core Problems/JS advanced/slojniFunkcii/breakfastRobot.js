let f = (function () {
    let microelements={
      'protein': 0,
        'carbohydrate':0,
        'fat': 0,
        'flavour': 0
    }
    return function solve(input){
        let commands=input.split(' ');
    let robot={
        'restock': (microelement, quantity)=> {

            microelements[microelement] += Number(quantity);
            return 'Success';

        },
        'prepare':(recipe,quantity)=> {
            quantity = Number(quantity);
            switch (recipe) {
                case 'apple':
                   if(microelements.carbohydrate-quantity<0){
                       return `Error: not enough carbohydrate in stock`
                   }
                    if(microelements.flavour-2*quantity<0){
                        return `Error: not enough flavour in stock`
                    }
                    microelements.carbohydrate-=quantity;
                    microelements.flavour-=2*quantity;
                    return 'Success';
                case 'coke':
                    if(microelements.carbohydrate-10*quantity<0){
                        return `Error: not enough carbohydrate in stock`
                    }
                    if(microelements.flavour-20*quantity<0){
                        return `Error: not enough flavour in stock`
                    }
                    microelements.carbohydrate-=10*quantity;
                    microelements.flavour-=20*quantity;
                    return 'Success';
                case 'burger':
                    if(microelements.carbohydrate-5*quantity<0){
                        return `Error: not enough carbohydrate in stock`
                    }
                    if(microelements.fat-7*quantity<0){
                        return `Error: not enough fat in stock`
                    }
                    if(microelements.flavour-3*quantity<0){
                        return `Error: not enough flavour in stock`
                    }
                    microelements.carbohydrate-=5*quantity;
                    microelements.fat-=7*quantity;
                    microelements.flavour-=3*quantity;
                    return 'Success';
                case 'omlet':
                    if(microelements.protein-5*quantity<0){
                        return `Error: not enough protein in stock`
                    }
                    if(microelements.fat-1*quantity<0){
                        return `Error: not enough fat in stock`
                    }
                    if(microelements.flavour-1*quantity<0){
                        return `Error: not enough flavour in stock`
                    }
                    microelements.protein-=5*quantity;
                    microelements.fat-=1*quantity;
                    microelements.flavour-=1*quantity;
                    return 'Success';
                case 'cheverme':
                    if(microelements.protein-10*quantity<0){
                        return `Error: not enough protein in stock`
                    }
                    if(microelements.carbohydrate-10*quantity<0){
                        return `Error: not enough carbohydrate in stock`
                    }
                    if(microelements.fat-10*quantity<0){
                        return `Error: not enough fat in stock`
                    }
                    if(microelements.flavour-10*quantity<0){
                        return `Error: not enough flavour in stock`
                    }
                    microelements.protein-=10*quantity;
                    microelements.carbohydrate-=10*quantity;
                    microelements.fat-=10*quantity;
                    microelements.flavour-=10*quantity;
                    return 'Success';


            }

        },
        'report':()=>{
            let result='';
            for(let i in microelements){
                result+=`${i}=${microelements[i]} `;
            }

            return result.substr(0,result.length-1);

        }

    }
        return robot[commands[0]](commands[1],commands[2]);
    }
})();
var expectationPairs = [
    ['prepare cheverme 1', 'Error: not enough protein in stock'],
    ['restock protein 10', 'Success'],
    ['prepare cheverme 1', 'Error: not enough carbohydrate in stock'],
    ['restock carbohydrate 10', 'Success'],
    ['prepare cheverme 1', 'Error: not enough fat in stock'],
    ['restock fat 10', 'Success'],
    ['prepare cheverme 1', 'Error: not enough flavour in stock'],
    ['restock flavour 10', 'Success'],
    ['prepare cheverme 1', 'Success'],
    ['report', 'protein=0 carbohydrate=0 fat=0 flavour=0']];
    for(let i of expectationPairs){
        console.log(f(i[0]));
    }

