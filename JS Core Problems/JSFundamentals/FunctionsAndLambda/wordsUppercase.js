function wordsUppercase([str]) {
    str=str.toUpperCase();
    let wordsOnly=str.split(/\W+/);
    wordsOnly=wordsOnly.filter(x=>x!='');
    console.log(wordsOnly.join(", "));

}
wordsUppercase(['Hi, how are you?']);