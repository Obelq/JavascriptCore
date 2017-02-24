function argumentInfo(input) {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+': '+obj);
        if(!summary[type]){
            summary[type]=1;
        } else{
          summary[type]++;
        }
    }
    let sortedTypes = Object.keys(summary).sort((a,b)=> summary[b]-summary[a]);
    for(let currentType of sortedTypes){
        console.log(`${currentType} = ${summary[currentType]}`)
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })