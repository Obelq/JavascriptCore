    function isPalindrome(text) {

        for (let i = 0; i < text.length/2; i++) {
            if(text[i]!=text[text.length-1-i])return false;
        }
        return true;
    }
    console.log(isPalindrome(["haha"]));