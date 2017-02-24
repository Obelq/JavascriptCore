function* rendom(seed) {
    let key = 4871*7919;
    let x1 = seed;
    while (true){
        x1=(x1*x1)%key;
        yield x1 % 100;
    }
}