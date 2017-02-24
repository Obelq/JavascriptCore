function radioCrystals(arr) {
    arr=arr.map(Number);
    let requiredThickness = arr[0];
    let currentElementThickness = 0;
    let actionCounter = 0;
    for (let i = 1; i < arr.length; i++) {
        currentElementThickness = arr[i];
        console.log(`Processing chunk ${arr[i]} microns`);
        actionCounter = 0;
        reducing('Cut',4);
        reducing('Lap',1.25);
        reducing('Grind',20);
        reducing('Etch',2);
        console.log(`Finished crystal ${currentElementThickness} microns`)

    }
    function reducing(actionName,action) {
        if (currentElementThickness>requiredThickness) {

            while (true) {
                if (currentElementThickness==requiredThickness) {
                    break;

                }

                if (actionName=='Cut'||actionName=='Lap') {
                    currentElementThickness /= action;
                }
                else {currentElementThickness -= action;}
                actionCounter++;
                if (currentElementThickness <= requiredThickness) {
                    if (actionName=='Etch'){
                        console.log(`${actionName} x${actionCounter}`);
                        console.log(`Transporting and washing`);
                        if (currentElementThickness!=requiredThickness){
                            console.log("X-ray x1");
                        }
                        break;
                    }
                    if (currentElementThickness==requiredThickness){
                        console.log(`${actionName} x${actionCounter}`);
                        console.log(`Transporting and washing`);

                        break;
                    }
                    if (actionName=='Cut'||actionName=='Lap') {
                        currentElementThickness = Math.floor(currentElementThickness * action);
                    }
                    else {currentElementThickness = Math.floor(currentElementThickness + action);}
                    if (actionCounter==1){
                        actionCounter=0;
                        break;
                    }
                    console.log(`${actionName} x${actionCounter-1}`);
                    console.log(`Transporting and washing`);

                    actionCounter=0;

                    break;
                }

            }
        }
    }
}
radioCrystals(['1000','1250']);