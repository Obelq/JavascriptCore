function validityChecker([x1,y1,x2,y2]) {
    [x1,y1,x2,y2]=[x1,y1,x2,y2].map(Number);
    function distanceChecker(x1,y1,x2,y2) {
        let distance = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
        if (distance==Math.floor(distance))console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    distanceChecker(x1,y1,0,0);
    distanceChecker(x2,y2,0,0);
    distanceChecker(x1,y1,x2,y2);
}