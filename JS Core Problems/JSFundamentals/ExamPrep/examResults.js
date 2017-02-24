function examResult(input) {
    let avgExam = input.pop();
    let sum=0;
    let counter=0;
    for (let i = 0; i < input.length; i++) {
        let pieces = input[i].split(' ').filter(x=>x!='').map(x=>x.trim()).filter(function(e){return e});
        //let [student,studentCourse,examPoints,bonuses] = array[i].split(/\s+/).filter(function(e){return e});
        let [student,exam,examPoints,courseBonuse]=pieces;
        let courseScore=Number(examPoints)*80/400+Number(courseBonuse);
        let grade = (courseScore/80)*4+2;
        if(grade>6)grade=6;

        if(exam==avgExam){
            sum+=Number(examPoints);
            counter++;
        }
        if(examPoints<100){
            console.log(`${student} failed at "${exam}"`);
            continue;
        }
        console.log(`${student}: Exam - "${exam}"; Points - ${Math.round(courseScore*100)/100}; Grade - ${grade.toFixed(2)}`);
    }
    console.log(`"${avgExam}" average points -> ${Math.round(sum*100/counter)/100}`);


}
examResult([
    `EDUU    JS-Basics                317          15`,
    `RoYaL        HTML5        121         10`,
    `ApovBerger      OOP   0    10`,
    `Stamat OOP   190 10`,
    `MINKA OOP   230 10`,
    `OOP`
]);