function softuniForum(input) {
    let bannedUsers=input.pop().split(' ');
    let checker=true;
    let users=[];
    for (let i = 0; i < input.length; i++) {
        let regex=/#[A-Za-z][0-9A-Za-z-_]+/g;
        let tagInRegex=/<code>/g;
        let tagOutRegex=/<\/code>/g;
        let tags;
        if(tags=tagInRegex.exec(input[i])){
            checker=false;
        }
        if(tags=tagOutRegex.exec(input[i])){
            checker=true;
        }
        if(checker) {
            let match;
            while (match = regex.exec(input[i])) {
                if (match[0][match[0].length - 1] == '-' || match[0][match[0].length - 1] == '_') {
                    continue;
                }
                let username = match[0].substr(1);
                let checkerBanned = true;
                for (let j = 0; j < bannedUsers.length; j++) {
                    if (bannedUsers[j] == username) {
                        checkerBanned = false;
                    }
                }
                if (checkerBanned) {
                    input[i] = input[i].replace(match[0], `<a href="/users/profile/show/${username}">${username}</a>`)
                }
                else {
                    input[i] = input[i].replace(match[0], '*'.repeat(match[0].length-1));
                }


            }
        }
        console.log(input[i]);
    }


}
softuniForum([
`#RoYaL-: I'm not sure what you mean,`,
`but I am confident that I've written`,
`everything correctly. Ask #iordan_93`,
`and #pesho if you don't believe me`,
`<code>`,
`#trying to print stuff`,
`print("yoo")`,
`</code>`,
`pesho gosho`

]);