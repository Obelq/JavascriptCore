function roadRadar([v,area]) {
    v=Number(v);
    function getLimit(area) {
        switch (area) {
            case 'motorway':return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    function getInfraction(v,limit) {
        let overSpeed = v - limit;
        if (overSpeed<=0){

        } else {
            return overSpeed;
        }
    }
    let limit = getLimit(area);
    let previshenie = getInfraction(v, limit);


    if (previshenie<=20)return "speeding";
    else if (previshenie<=40)return "excessive speeding";
    else if (previshenie>40) return "reckless driving";
}
console.log(roadRadar([40, 'city']));