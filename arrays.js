/**
 * 배열(Array)
 * - 복수의 데이터를 순서대로 담고 있는 자료구조
 * - 배열의 순서는 0부터 시작
 * - 배열은 객체!
 * - 키 => 인덱스, 값 => 요소
 */

var mbti = ['INFP', 'ENFJ', 'INTJ']; // 데이터 자료형에 제한이 없음
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = 'ESFP';
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = 'ISTJ';
// console.log(mbti[2]);

// push()
// console.log(mbti.push('ESFP', 'ISTJ')); // 배열의 크기 반환

// 스프레드 문법
var newMbti = [...mbti, 'ESFP', 'ISTJ'];
// console.log(mbti); // 추가되지 않음
// console.log(newMbti); // 추가됨

var mbti = ['INFP', 'ENFJ', 'INTJ'];
// pop()
// console.log(mbti.pop());
// console.log(mbti);

// unshift()
// console.log(mbti.unshift('ESFP', 'ISTJ')); // 배열의 앞에서 요소 추가
// console.log(mbti);

// 스프레드 문법
var newMbti = ['ESFP', 'ISTJ', ...mbti];
// console.log(mbti); // 추가되지 않음
// console.log(newMbti); // 추가됨


// shift()
// console.log(mbti.shift()); // 배열의 가장 앞 요소를 삭제
// console.log(mbti);



var mbti = ['INFP', 'ENFJ', 'INTJ'];


// slice()
// console.log(mbti.slice(0, 2));
// console.log(mbti.slice());
// console.log(mbti.slice(-1)); // 음수는 뒤에서부터 인덱싱


// join()
// console.log(mbti.join());
// console.log(mbti.join('-')); // 각 요소 사이의 구분자
// console.log(mbti.join('|'));
// console.log(mbti.join('')); // 빈칸 없이 연결

// sort()
// console.log(mbti.sort());


// reverse()
console.log(mbti.sort().reverse()); // 내림 차순 정렬