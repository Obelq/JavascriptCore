function insideVolume(input) {

    for (let i = 0; i < input.length; i+=3) {
        if(checker([input[i],input[i+1],input[i+2]])) console.log("inside");
        else console.log("outside");
    }
    function checker([x,y,z]) {
        [x, y, z] = [x, y, z].map(Number);
        if (x >= 10 && x <= 50) {
            if (y >= 20 && y <= 80) {
                if (z >= 15 && z <= 50) return true;
            }
        }
        return false;
    }
}
insideVolume()