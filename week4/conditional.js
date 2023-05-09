/**
 * 제어문(control flow)
 * 1. 조건문
 * 2. 반복문
 */

// var a = 5;
// var a = 2;
var a = 1;

// 1. if...else
// if (a > 2){
//     console.log('a > 2');
// } else{
//     console.log('a <= 2');
// }


// 2. if...else if...else
// if (a > 2){
//     console.log('a > 2');
// } else if (a == 2){
//     console.log('a = 2');
// } else if (a == 0) {
//     console.log('a = 0'); // 먼저 나온 조건식의 값을 적용
// } else if (a < 2) {
//     console.log('a < 2');
// } 


// 3. switch

var mbti = 'INFP';
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP'; 
        break; // 문을 벗어나지 않으면 default까지
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;
    default: 
        val = '유효한 값이 아닙니다';
}

console.log(val);