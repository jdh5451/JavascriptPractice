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

//takes 2 integers
function shiftToRight(operand, num){
    return Math.floor(operand/Math.pow(2,num));
}

console.log(shiftToRight(80, 3));

console.log(shiftToRight(-24, 2));

console.log(shiftToRight(-5, 1));

console.log(shiftToRight(4666, 6));

console.log(shiftToRight(3777, 6));

console.log(shiftToRight(-512, 10));

console.log(shiftToRight(0,1));