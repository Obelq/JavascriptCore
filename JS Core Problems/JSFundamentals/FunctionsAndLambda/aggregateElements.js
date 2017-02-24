function aggregateElements(arr){
    "use strict";
    arr=arr.map(Number);
    aggregate(arr,0,(a, b) => a+b);
    aggregate(arr,0,(a, b) => a+1/b);
    aggregate(arr,'',(a, b) => a+b);
    function aggregate(arr, startVal,func) {
        let val=startVal;
        for (let i = 0; i < arr.length; i++)
            val=func(val,arr[i]);
            console.log(val);

    }
}
aggregateElements(["2","3"]);