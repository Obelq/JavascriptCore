function biggestEl(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let sum1 = 0;
    let sum2 = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row==col)sum1+=matrix[row][col];
            if(matrix[row].length-1-row==col)sum2+=matrix[row][col];
        }
    }
    if(sum1==sum2){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row==col||matrix[row].length-1-row==col){
                    continue;
                }
                    matrix[row][col]=sum1;

            }
        }

    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));

}
biggestEl(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);