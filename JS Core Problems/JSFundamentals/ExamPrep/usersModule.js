function usersModule(input) {
 let sortingCriteria = input.shift().split('^')[0];
    let obj = {'students':[],'trainers':[]};
    let levels = {};
    for (let i = 0; i < input.length; i++) {
        let objPart = JSON.parse(input[i]);
        let role=objPart['role']+'s';
        if(role=='students'){
            obj[role].push({'id':objPart['id'],
                'firstname':objPart['firstname'],
                'lastname':objPart['lastname'],
                'averageGrade':(objPart['grades'].map(Number).reduce((a,b)=>a+b,0)/objPart['grades'].length).toFixed(2),
                'certificate':objPart['certificate']
            });
            levels[objPart['id']]=objPart['level'];
        }
        else{
            obj[role].push({'id':objPart['id'],
                'firstname':objPart['firstname'],
                'lastname':objPart['lastname'],
                'courses':objPart['courses'],
                'lecturesPerDay':objPart['lecturesPerDay']
            });
        }
    }
    let result={};
    if(sortingCriteria=='name'){

        obj['students']=obj['students'].sort(function (a,b) {
            if(a.firstname == b.firstname){
                return a.lastname.localeCompare(b.lastname);
            }
            return a.firstname.localeCompare(b.firstname);
        });
    }
    else{
        obj['students']=obj['students'].sort(function (a,b) {
            if(levels[a.id] == levels[b.id]){
                return a.id - b.id;
            }
            return levels[a.id] - levels[b.id];
        });
    }
    obj['trainers']=obj['trainers'].sort(function (a,b) {
        if(a.courses.length == b.courses.length){
            return a.lecturesPerDay - b.lecturesPerDay;
        }
        return a.courses.length - b.courses.length;
    });


    console.log(JSON.stringify(obj));

}
usersModule([
    `level^courses`,
    `{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}`,
    `{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}`,
    `{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}`,
    `{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}`,
    `{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}`

]);