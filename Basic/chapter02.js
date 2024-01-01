/*문자*/
const name1 = "Mike";
const name2 = 'iikwon';
const name3 = `Luois`;

// `` : 문자열 내부 변수 표현 ${} 
const message1 = `My name is ${name1}`;
console.log(message1);
// `` : 문자열 내부 표현식 ${}
const message2 = `${name2} age is ${20+8}`;
console.log(message2);


/*숫자형*/
const x = 1/0; //무한
const string = name1/2; // Not a number 

/* null(존재하지 않음) , undifined (값이 할당되지 않음) */
//null
//null != 객체
let year = null;
//undifined
let age;
console.log(age); 

/* typeof 연산자 */
console.log(typeof name1); //string
