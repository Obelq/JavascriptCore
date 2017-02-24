function bunnyKiller(matrixRows) {
    let targets = matrixRows[matrixRows.length-1].split(' ').map(x=>x.split(',').map(Number));
    matrixRows.pop();
    let matrix = matrixRows.map(x=>x.split(' ').map(Number));
    let dmg =0;
    let counter=0;

    for (let i = 0; i < targets.length; i++) {
        let [x,y] = [targets[i][0],targets[i][1]];
        let bomber = matrix[x][y];
        if(bomber<=0){
           continue;
        }
        for (let j = x-1; j <= x+1; j++) {
            for (let k = y-1; k <= y+1; k++) {
                if(j>-1&&j<matrix.length){
                    if(matrix[j][k]!==undefined){
                        matrix[j][k]-=bomber;
                    }
                }
            }
        }
        dmg+=bomber;
        counter++;
    }
    matrix.forEach(x=>x.forEach(function(c){if(c>0){dmg+=c;counter++;}}));
    console.log(dmg);
    console.log(counter);
}
bunnyKiller([
    `5 10 15 20`,
    `10 10 10 10`,
    `10 15 10 10`,
    `10 10 10 10`,
    `2,2 0,1`

]);