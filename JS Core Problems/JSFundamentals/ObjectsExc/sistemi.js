function systemComps(arr) {
    let obj = new Map;
    for (let i = 0; i < arr.length; i++) {
        let pieces = arr[i].split(' | ');
        let [carBrand,carModel,carProducer]=[pieces[0], pieces[1], pieces[2]];
        if (!obj[carBrand]) {
            obj[carBrand] = new Map();
        }
        if (!obj[carBrand][carModel]) {
            obj[carBrand].set(carModel);
            obj[carBrand][carModel] = [];
        }
        obj[carBrand][carModel].push(carProducer);
    }
    let sortedMark = Object.keys(obj).sort().sort(function(x,y){return Object.keys(obj[y]).length-Object.keys(obj[x]).length});

    for (let car of sortedMark) {
        console.log(car);
        let sortedComps = Object.keys(obj[car]).sort(function(x,y){return obj[car][y].length-obj[car][x].length});
        for (let model of sortedComps) {
            console.log(`|||${model}`);
            for (let k of obj[car][model]) {
                console.log(`||||||${k}`);
            }
        }
    }
}
systemComps([
    `SULS | Main Site | Home Page`,
    `SULS | Main Site | Login Page`,
    `SULS | Main Site | Register Page`,
    `SULS | Judge Site | Login Page`,
    `SULS | Judge Site | Submittion Page`,
    `Lambda | CoreA | A23`,
    `SULS | Digital Site | Login Page`,
    `Lambda | CoreB | B24`,
    `Lambda | CoreA | A24`,
    `Lambda | CoreA | A25`,
    `Lambda | CoreC | C4`,
    `Indice | Session | Default Storage`,
    `Indice | Session | Default Security`
]);
