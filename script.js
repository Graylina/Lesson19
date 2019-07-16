'use strict';

// 1 task
let a = 2;
function isNumberInRange(a) {
    return( a > 0 && a < 10 ? true : false);
}

console.log(isNumberInRange(a));


//2 task

function isEven(n) {
    if(n%2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(1));

//3 task


var value = +prompt('value','');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
default:
    alert('Not correct');
    break;
}

// task 4

function min(a, b){
    return( a > b ? b : a );
}
console.log(min(3,5));
console.log(min(5,-1));