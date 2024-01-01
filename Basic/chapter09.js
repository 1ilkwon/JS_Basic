/* 함수(선언문) 
함수 선언부 -> 어디서든 가능 : 호이스팅
*/
function functionName(name){
    console.log(`hello, ${name}`);
    console.log(name);
}
functionName('일권');

function showError(){
    console.log(`에러발생`); 
}
showError();

function sayHello(name){
    let msg = 'Hello';
    if(name){
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHello();
sayHello('Mike');
// console(msg); -> 에러 발생 : 함수 지역 변수 사용불가. 

/* default value */
function defaultHello(name='freind'){
    let msg = `Hello, ${name}`;
    console.log(msg)
}
defaultHello(); // Hello, friend
defaultHello('Jane') // Hello, Jane

/* return */
function add (num1, num2){
    return num1 + num2;
}
const result = add(2,3);
console.log(result);

// return 값이 없으면 undefined 반환
function showError2 () {
    console.log('에러가 발생했습니다.');
    //reuturn 
}
const result2 = showError();
console.log(result2); //undefind 반환