let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();


function calculateAge(){

    let birthDate = new Date(el.value); // 생년월일 변환

    let age;

    if (today.getMonth() > birthDate.getMonth() || 
        (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;

    return age;
} /// 만 나이 계산해서 만 나이 밑에 메시지 삽입

elSubmit.addEventListener('click', calculateAge);