function personalBMI(name,age,weight,height) {
    let result={
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        }
    }
    result['BMI']=Math.round(result.personalInfo.weight/(result.personalInfo.height*result.personalInfo.height)*10000);
    let status='';
    if(result.BMI<18.5){
        status= 'underweight'
    } else if(result.BMI<25){
        status= 'normal'
    } else if(result.BMI<30){
        status= 'overweight'
    } else {
        status='obese';
        result['recommendation']='admission required';
    }
    result['status']=status;

    return result;
}
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));