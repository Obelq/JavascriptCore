function printArray(elements) {
    let input = elements[0].split(' ').map(Number);
    let rows = input[0];
    let cols = input[1];
    let matrix=new Array(rows);
    let right=true;
    let down=false;
    let left=false;
    let up=false;
    let counter=1;
    for (let row = 0; row < rows; row++) {
        matrix[row]=new Array(cols);
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col]=0;
        }
    }
    let row=0;
    let col=0;
    while(true){
            if(right){
                if(matrix[row][col]!=0){
                    right=false;
                    down=true;
                    col--;
                    row++;
                    continue;
                }
                matrix[row][col]=counter;
                counter++;
                col++;
            }
            else if(down){
                if(row==rows||matrix[row][col]!=0){
                    down=false;
                    left=true;
                    row--;
                    col--;
                    continue;
                }
                matrix[row][col]=counter;
                counter++;
                row++;
            }
            else if(left){
                if(typeof matrix[row][col]==='undefined'||matrix[row][col]!=0){
                    left=false;
                    up=true;
                    col++;
                    row--;
                    continue;
                }
                matrix[row][col]=counter;
                counter++;
                col--;
            }
            else if(up){
                if(typeof matrix[row][col]==='undefined'||matrix[row][col]!=0){
                    up=false;
                    right=true;
                    row++;
                    col++;
                    continue;
                }
                matrix[row][col]=counter;
                counter++;
                row--;
            }
            if(counter==rows*cols+1)break;
        }

    console.log(matrix.map(row => row.join(' ')).join('\n'));

}
printArray(['5 5']);
