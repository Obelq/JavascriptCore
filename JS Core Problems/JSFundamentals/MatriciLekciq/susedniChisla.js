function eqNei(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' '));
    let counter =0;
    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col]==matrix[row+1][col])counter++;

        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length-1; col++) {
            if(matrix[row][col]==matrix[row][col+1])counter++;

        }
    }
    console.log(counter);
}