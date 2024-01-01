/* 함수(표현식) 
함수 선언부 -> 표현식 다음에 가능
*/

/*
표현식 수정 전
const sayHello = function(name){
    const msg = `Hello, ${name}`;
    console.log(msg);
};
*/

// 수정후
const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
};
sayHello('ilkwon');

// 인수 2개, return
// const add = (num1, num2) => {
//     return num1 + num2;
// }

const add = (num1, num2) => num1 + num2;
console.log(add(1,2));