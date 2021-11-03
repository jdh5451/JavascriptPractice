//takes an integer array.
function zeroesToEnd(arr){
    let zerocount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1);
            zerocount++;
        }
    }
    for(let i=0;i<zerocount;i++){
        arr.push(0);
    }
    console.log(arr);
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]);

