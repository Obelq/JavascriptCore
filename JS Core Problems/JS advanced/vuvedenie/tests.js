function spymaster(input) {
    let specialKey=input.shift();
    for (let i = 0; i < input.length; i++) {
        let textRegex=new RegExp('(?:^| )('+specialKey+'[ ]+)([A-Z!%$#]{8,})(?=[ .,]|$)','gi');
        let match;
        while(match=textRegex.exec(input[i])){
            let checker;
            if(checker=/[a-z]/g.exec(match[2]))continue;
            let newText=match[2].split('');
            for (let j = 0; j < newText.length; j++) {

                if(newText[j]=='!'){
                    newText[j]='1';
                }
                else if(newText[j]=='%'){
                    newText[j]='2';
                }
                else if(newText[j]=='#'){
                    newText[j]='3';
                }
                else if(newText[j]=='$'){
                    newText[j]='4';
                }
                else {
                    newText[j]=newText[j].toLowerCase();
                }

            }
            let result=newText.join('');
            input[i]=input[i].replace(match[1]+match[2],match[1]+result)
        }
        console.log(input[i]);
    }

}
spymaster([
`tricky`,
`And now the tricky tests`,
`Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%`,
`Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -`,
`Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE`,
`Be very carefull now trICkY plainwrong, trICkY PLAINWRONG`,
`next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS`,
`It's tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,`,
`now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.`,
`DON'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.`,
`Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow `
])