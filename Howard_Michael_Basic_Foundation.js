// get 1 to 255
function allarr(num) {
    var array1 = [];
    for (var i = 1; i <= num; i++) {
        array1.push(i);
    }
    return(array1);
}
var y = allarr(255);
console.log(y);
// get even 1000 sum
function evensum (num) {
    var sum = 0;
    for (var j = 1; j <= num; j++) {
        if (j % 2 === 0) {
            sum = sum + j;
        }
    }
return (sum);
}
var y1 = evensum(1000);
console.log(y1);
//get odd sum 5000
function oddsum (num) {
    var sum1 = 0;
    for (var q = 1; q <= num; q++) {
    if (q % 2 !== 0) {
        sum1 = sum1 + q;
    }
        }
    return(sum1);
    }
var y2 = oddsum(5000);
console.log(y2);
// Iterate an array
function itarr (arr) {
    var arr1 = [];
    var sum2 = 0;
    for (var w = 0; w < arr1.length; w++) {
        sum2 = sum2 + arr1[w];
    }
    return(sum2);
}
var y3 = itarr();
console.log(y3);
//Find Max
function findmax (arr) {
    var arr2 = [];
    var max = arr2[0];
    for (var e = 0; e < arr2.length; e++) {
        if (arr2[e] > max) {
            max = arr2[e];
        }
    }
    return max;
}
var y4 = findmax();
console.log(y4);
//Average
function newavg (arr) {
    var arr3 =[];
    var sum3 = 0;
    var avg = 0;
    for (var r = 0; r < arr3.length; r++) {
        sum3 = sum3 + arr3[r];
        avg = sum3 / arr3.length;
    }
    return avg;
}
var y5 = newavg();
console.log(y5);
//Array Odd
function arrayodd () {
    var arr4 = [];
    for (var t = 1; t <= 50; t++) {
        if (t % 2 !== 0) {
            arr4.push(t);
        }
    }
    return arr4;
}
console.log(arrayodd());
//Greater than Y
function greaterthany (arr, Y) {
    var totalnumber = 0;
    for (var g =0; g < arr.length; g++) {
        if(arr[g] > Y) {
            totalnumber++;
        }
    }
    return totalnumber;
}
//squares
function squares (arr) {
    for (var d = 0; d < arr.length; d++) {
        arr[d] = arr[d] * arr[d];
    }
    return arr;
}
// Negatives
function negatives (arr) {
    for (var h = 0; h < arr.length; h++) {
        if (arr[h] < 0) {
            arr[h] = 0;
        }
    }
    return arr;
}
//Max, Min, Avg
function mma (arr) {
    var max = 0;
    var min = 0;
    var sum = 0;
    for(var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
        if(arr[x] < min) {
            min = arr[x];
        }
        sum = sum + arr[x];
    }
    var av = sum / arr.length;
    var arrnew = [max, min, av];
    return arrnew;
}
//Swap Values
function swapvalues (arr) {
    var swap = arr[0];
    for (var l = 0; l < arr.length; l++) {
        arr[0] = arr.length - 1;
        arr[arr.length - 1] = swap;
        return arr;
    }
}
//Number to String
function numstring (arr) {
    for(var z = 0; z < arr.length; z++) {
        if (arr[z] < 0) {
            arr[z] = "Dojo";
        }
    }
    return arr;
}