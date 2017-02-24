function sortArray(inputArray, sortMethod) {
    let sortingStrategies={
        'asc' : (a,b)=>a-b,
        'desc' : (a,b)=>b-a
    };
    return inputArray.sort(sortingStrategies[sortMethod]);
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));