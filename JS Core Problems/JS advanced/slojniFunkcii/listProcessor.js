function commands(input) {
    let commandProc = (function () {
       let list=[];
        return {
            add : (newItem)=>list.push(newItem),
            remove : (target)=>list=list.filter(x=>x!=target),
            print : ()=>console.log(list)
        }
    })();
    for(let command of input){
        let [action,item]=command.split(' ');
        commandProc[action](item);
    }
}
commands(['add hello', 'add again', 'remove hello', 'add again', 'print'])