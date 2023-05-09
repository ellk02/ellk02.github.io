/**
 * 함수(functions)
 * - 코드를 반복해서 작성하는 비효율 줄임
 */


// 함수 선언문
// function multiply(a, b){
//     return a * b;
// }

// console.log(multiply(10, 5));

// var result = multiply(435, 24);

// console.log(result);

// 함수 표현식
// var multiply = function calc (a, b) { // 함수의 이름 변수에 표현식을 대입
//     return a *b;
// };

// console.log(multiply(10, 5));
// console.log(calc(10, 5)); // 찾을 수 없는 함수


// var a = 10; // 전역 변수

// while(true){
//     var a = 1000; // 지역 변수가 아니라 전역 변수같이 건주
//     break;
// }

// console.log(a);


// 호이스팅

// console.log(word);

// word = "happy";

// console.log(word); // 출력은 순서를 지켜야 함

// var word; // 변수 선언 및 호출의 순서를 지키지 않아도 됨


// let

// let word;

// console.log(word);

// word = "happy";

// console.log(word);

// var a = 10; 

// while(true){
//     let a = 1000; // 블록 범위 밖의 변수만, 전역 변수처럼
//     break;
// }

// console.log(a);


// const

// const b = 2; // 변수 선언 및 초기화

// console.log(b);

// b = 3; // 값 변경 불가, 고정값처럼

// const PI = 3.14;
// const TIME_DATE = 3.14;


// const로 선언된 변수에 할당된 객체
// const student = {
//     grade: 1, // 객체만 선언했기 때문에 값은 지정되지 않음
//     class: 3
// }

// // student.grade = 2;

// student = {
//     num: 20123, // 값 재할당 불가
//     grade: 2
// }

// console.log(student);


// 화살표 함수

// let plus = (a, b) => {
//     return a + b;
// }

// console.log(plus(2, 3));

// let plus = (a, b) =>  a + b;

// console.log(plus(2, 3));


// let print = word => { // 매개변수가 한 개 일 때는 괄호 X
//     console.log(word);
// }

// print("Hello!");


let myfunc = () => { // 인자가 없을 때는 ()
    return 1;
}

console.log(myfunc());