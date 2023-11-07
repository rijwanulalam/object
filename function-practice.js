

// function foo(){
//     console.log('foo');
//     return 3;
//     // bar();
// }

// // function bar(){
// //     console.log('bar');
// // }

// console.log(foo());

function sum(num1, num2, num3){
    var total = num1+num2+num3;
    var avg = total / 3;
    return avg;
}

var num1 = 3;
var num2 = 6;
var num3 = 9;

const average = (sum(num1, num2, num3));
// console.log(average);

var friendsAge = [2, 3, 4, 5, 6, 7, 8, 9]

var arrayLength = friendsAge.length;

// var sum = 0
// for (var i = 0; i < arrayLength; i++){
//     var friendAge = friendsAge[i];
//     sum += friendAge;
// }
// console.log(sum);

// function make_avg(sum, arrayLength){
//     var avg = sum / arrayLength;
//     return avg;
// }
// console.log(make_avg(sum, arrayLength));
var total = 0;
function make_avg(friendsAge, arrayLength){
    
    for(var i = 0; i < arrayLength; i++){
        var eachAge = friendsAge[i];
        total += eachAge;
    }
    var avg = total / arrayLength;
    return avg;
}

// console.log(make_avg(friendsAge, arrayLength));


function odd_even(num){
    if (num % 2 === 0){
        return "num is even";
    }else{
        return "num is odd";
    }
}
console.log(odd_even(5));