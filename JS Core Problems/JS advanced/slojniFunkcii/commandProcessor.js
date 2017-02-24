function commandsProc(commands) {
    let commandProcessor =(function () {
        let text='';
        return {
            append : (str)=>text+=str,
            removeStart : (n)=> text=text.slice(Number(n)),
            removeEnd: (count) => text =
                text.slice(0, text.length - count),
            print : ()=>console.log(text)
        }
    })();
    for(let command of commands){
        let [action,value]=command.split(' ');
        commandProcessor[action](value)
    }
}
commandsProc(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);