function angParser(input) {
    let obj = new Map();
    let arr=[];
    for(let element of input){
        let regex = /^\$(controller|model|view|app)='([^']+)'$/g;
        let match = regex.exec(element);
        if(match){
            arr.push(match[2]);
        }
    }
    arr.forEach(x=>obj.set(x,new Map([["controllers",[]],["models",[]],["views",[]]])));
    for (let i = 0; i < input.length; i++) {
        let regex = /^\$(controller|model|view)='([^']+)'&app='([^']+)'$/g;
        let match = regex.exec(input[i]);
        if(match&&arr.indexOf(match[3])!=-1){
            obj.get(match[3]).get(match[1]+'s').push(match[2]);
        }
    }
    let sorted=[...obj.keys()].sort(function (a,b) {
        if(obj.get(b).get('controllers').length==obj.get(a).get('controllers').length){
            return obj.get(a).get('models').length-obj.get(b).get('models').length;
        }
        return obj.get(b).get('controllers').length-obj.get(a).get('controllers').length;
    });
    let result = {};
    for(let element of sorted){
        result[element]={};
        for(let [key,value] of obj.get(element)){
            result[element][key]=value.sort();
        }
    }
    console.log(JSON.stringify(result));
}
/*angParser([
    `$app='MyApp'`,
    `$controller='My Controller'&app='MyApp'`,
    `$model='My Model'&app='MyApp'`,
    `$view='My View'&app='MyApp'`

]);*/
angParser([
    `$controller='PHPController'&app='Language Parser'`,
    `$controller='JavaController'&app='Language Parser'`,
    `$controller='C#Controller'&app='Language Parser'`,
    `$controller='C++Controller'&app='Language Parser'`,
    `$app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='SpamController'&app='Garbage Collector'`,
    `$app='Language Parser'`

]);