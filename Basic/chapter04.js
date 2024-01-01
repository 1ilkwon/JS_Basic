/* 형변환 */
//prompt-> 문자
const mathScore1 = prompt("수학 몇점?"); //80
const engScore1= prompt("영어 몇점?"); //90
const result1 = (mathScore1 + engScore1)/2;
console.log(result1); // 문자 + 문자 -> 8090

const mathScore2 = 90;
const engScore2 = 80;
const result2 = (mathScore2 + engScore2)/2;
console.log(result2); // 85

/* 자동 형변환 */
console.log("9090" / 2); // 4545;
console.log("6" / "2"); // 3;

/* 명시적 형변환 */
/* String */
// 문자열 변환
String(3),String(true),String(false),String(null),String(undefined);

/* Number */
// 숫자형 변환
Number("123"); //123
Number("123fdas"); //NaN
Number(true); // 1
Number(false); // 0

/* Boolean */
// Boolean 변환
//false -> 숫자 0, 빈문자열, null, undifined, NaN

/* 주의사항 */
Number(null) //0
Number(undefined) // NaN
Number(0) // false
Number('0') // true
Number('') // false
Number(' ') // true

