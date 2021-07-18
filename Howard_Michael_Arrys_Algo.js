// print value and sums
var testArr = [6,3,5,1,2,4];
var sum = 0;
for (var i = 0; i < testArr.length; i++) {
    sum = sum + testArr[i];
    console.log (testArr[i], sum);
    }
// value * postion
var num = [6,3,5,1,2,4];
for (var j =  0; j < num.length; j++) {
    num[j] = num[j] * j;    
}
console.log(num)