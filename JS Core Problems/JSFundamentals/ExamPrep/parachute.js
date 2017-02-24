function parachute(input) {
    let x=input[0].indexOf('o');
    for (let i = 1; i < input.length; i++) {
        x+= (input[i].match(/>/g)||[]).length-(input[i].match(/</g)||[]).length;
        let position=input[i][x];
        if(position=="/"||position=="\\"){
            console.log('Got smacked on the rock like a dog!');
            console.log(i+' '+x);
            break;
        }
        if(position=='~'){
            console.log('Drowned in the water like a cat!');
            console.log(i+' '+x);
            break;
        }
        if(position=='_'){
            console.log('Landed on the ground like a boss!');
            console.log(i+' '+x);
            break;
        }


    }
}
parachute([
    `-------------o-<<--------`,
    `-------->>>>>------------`,
    `---------------->-<---<--`,
    `------<<<<<-------/\\--<--`,
    `--------------<--/-<\\----`,
    `>>--------/\\----/<-<-\\---`,
    `---------/<-\\--/------\\--`,
    `<-------/----\\/--------\\-`,
    `\\------/--------------<-\\`,
    `-\\___~/------<-----------`


]);