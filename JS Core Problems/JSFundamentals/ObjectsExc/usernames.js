function usernamesSorter(input) {
    let usernames=new Set();
    for (let i = 0; i < input.length; i++) {
        usernames.add(input[i]);
    }
    let result = Array.from(usernames).sort(a=>a).sort(function(a,b){
        if(a.length==b.length){
            return a.localeCompare(b);
        }
        return a.length-b.length});
    console.log(result.join('\n'));

}
usernamesSorter([
    `Denise`,
    `Ignatius`,
    `Iris`,
    `Isacc`,
    `Indie`,
    `Dean`,
    `Donatello`,
    `Enfuego`,
    `Benjamin`,
    `Biser`,
    `Bounty`,
    `Renard`,
    `Rot`

]);