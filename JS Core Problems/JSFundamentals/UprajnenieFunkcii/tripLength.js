function tripPath([x1,y1,x2,y2,x3,y3]) {
    [x1,y1,x2,y2,x3,y3]=[x1,y1,x2,y2,x3,y3].map(Number);
    let p1=[x1,y1,1];
    let p2=[x2,y2,2];
    let p3=[x3,y3,3];
    function distanceCalc([x1,y1],[x2,y2],[x3,y3]) {
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))+Math.sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
    }
    let minDistance = 1000000;
    let points=[];
    function bindMin(p1,p2,p3) {
        let distance=distanceCalc(p1,p2,p3);
        if(distance<minDistance){
            minDistance=distance;
            points=[p1[2],p2[2],p3[2]];
        }
    }
    bindMin(p1,p2,p3);
    bindMin(p1,p3,p2);
    bindMin(p2,p1,p3);
    bindMin(p2,p3,p1);
    console.log(`${points.join("->")}: ${minDistance}`);

}
tripPath(['5','1','1','1','5','4']);


function distanceCalc(x1,y1,x2,y2) {
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));

}
console.log(distanceCalc(5, 1, 1, 1));
console.log(distanceCalc(1, 1, 5, 4));
console.log(distanceCalc(5, 4, 5, 1));


function tripLength([x1,y1,x2,y2,x3,y3]) {
    [x1,y1,x2,y2,x3,y3]=[x1,y1,x2,y2,x3,y3].map(Number);
    let arr = [[x1,y1],[x2,y2],[x3,y3]];
    function distanceCalc(x1,y1,x2,y2) {
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));

    }
    let maxPath=1000000000;
    let points=[];
    for (let i = 0; i < 3; i++) {
        let distance = 0;
        distance+=distanceCalc(arr[i%3][0],arr[i%3][1],arr[(i+1)%3][0],arr[(i+1)%3][1]);
        distance+=distanceCalc(arr[(i+1)%3][0],arr[(i+1)%3][1],arr[(i+2)%3][0],arr[(i+2)%3][1]);
        if(distance<=maxPath){

            if(distance=maxPath){
                maxPath=distance;
                points.push([i%3+1,(i+1)%3+1,(i+2)%3+1]);
                continue;
            }
            maxPath=distance;
            points=[i%3+1,(i+1)%3+1,(i+2)%3+1];

        }
    }
    for (let i = 2; i >0; i--) {
        let distance = 0;
        distance+=distanceCalc(arr[i%3][0],arr[i%3][1],arr[(i+1)%3][0],arr[(i+1)%3][1]);
        distance+=distanceCalc(arr[(i+1)%3][0],arr[(i+1)%3][1],arr[(i+2)%3][0],arr[(i+2)%3][1]);
        if(distance<maxPath){

            if(distance=maxPath){
                maxPath=distance;
                points.push([i%3+1,(i+1)%3+1,(i+2)%3+1]);
                continue;
            }
            maxPath=distance;
            points=[i%3+1,(i+1)%3+1,(i+2)%3+1];

        }
    }
    let resultArray = [4,4,4];
    for (let i = 0; i < points.length; i++) {
        if(points[i][0]<=resultArray[0]){
            if (points[i][1]<=resultArray[1]){
                if (points[i][2]<=resultArray[2]){
                    resultArray=[points[i][0],points[i][1],points[i][2]];
                }
            }
        }
    }
    console.log(`${resultArray.join("->")}: ${maxPath}`);
}