function rectangleOfStars([n]="5") {
    n=Number(n);
    for (let i = 1; i <= n; i++) {

        console.log("*"+" *".repeat(n-1));
        console.log();
    }
}

rectangleOfStars();