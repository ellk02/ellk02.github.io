// 반복문(loop)

// 1. for


// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// for (var i = 10; i > 0; i--){
//     console.log(i);
// }


// for (var i = 0; i < 10; i++){
//     for (var j = 0; j < 10; j++){
//         console.log(`${i}-${j}`); // 출력 형식 지정
//     }
// }


// 2. while

// var flag = 10;

// while (flag > 10){
//     console.log(flag);
//     flag--;
// }


// 3. do...while

var flag = 10;

do{
    console.log(flag);
    flag--;
} while (flag < 0); // 무조건 반복문을 한 번 이상 실행
//while (flag > 0);