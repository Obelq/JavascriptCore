function ajaxReq(input) {
    let tocken = input.pop().split('');
    function validator(tocken,text) {
        for (let i = 0; i < tocken.length; i+=2) {
            let neededOccurences = tocken[i];
            let letter = tocken[i+1];
            if((text.match(new RegExp(letter,"g"))||[]).length==neededOccurences){
                return true;
            }
        }

        return false;

    }
    for (let i = 0; i < input.length; i+=3) {
        let methodRegex=/^Method: (GET|POST|PUT|DELETE)$/g;
        let credRegex =/^Credentials: (Bearer|Basic) ([a-zA-Z0-9]+)$/g;
        let contentRegex =/^Content: ([a-zA-Z0-9.])+$/g;
        let result='Response-';
        let match1 = methodRegex.exec(input[i]);
        let match2 = credRegex.exec(input[i+1]);
        let match3 = contentRegex.exec(input[i+2]);
        if(match1&&match2&&match3){
            if(match2[1]=='Basic'&&match1[1]!='GET'){
                console.log(result + 'Method:' + match1[1] + '&Code:401');
                continue;
            }

            if(validator(tocken,match2[2])){
                result+=`Method:${match1[1]}&Code:200&Header:${match2[2]}`;
            } else{
                result+=`Method:${match1[1]}&Code:403`;
            }


        } else {
            result+='Code:400';
        }
        console.log(result);

    }

}
ajaxReq([
    `Method: GET`,
    `Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB`,
    `Content: users.asd.1782452.278asd`,
    `Method: POST`,
    `Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas`,
    `Content: Johnathan`,
    `2q`

]);