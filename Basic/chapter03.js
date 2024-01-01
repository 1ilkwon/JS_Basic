/* alert, prompt, confirm */
//alert -> 메세지 알림,출력

/* prompt */
// 사용자에게 값을 입력받을때
const name = prompt("이름을 입력하세요");
alert("환영합니다, " + name + "님");
alert(`환영합니다, ${name}님`);

// 2개의 인수 prompt(메세지, 입력 defualt값)
const daily = prompt("날짜를 입력하세요", "2020-10-");

/* confirm */
// 확인받을때 사용 (확인과 취소버튼)
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult); //확인-> true, 취소 -> false

/* 단점
1. 스크립트 일시 정지
2. 스타일링 x
*/