/* Object

const superman = {
    name : 'clark',
    age : 33,
}

- 접근
superman.name; // clark
superman['age']; // 33
- 추가
superman.gender = 'male'; 
superman['hairColor'] = 'black';
- 삭제
delete superman.hairColor;

- 단축 프로퍼티 - 
const name = 'Jane';
const age = '22';
const superman = {
    name,
    age,
    gender:'female',
}
# 존재하지 않은 프로퍼티 접근 -> undefind
in 연산자 -> 프로퍼티 여부 확인
'birthDay' in superman; //false

*/

const superman = {
    name : 'clark',
    age : 33,
}
console.log(superman.name);
console.log(superman['age']);
console.log(superman);

function makeObject(name, age){
    return {
        name : name,
        age : age,
        hobby : 'football',
    };
}
const Mike = makeObject('Mike',30);
console.log(Mike);

console.log('age' in Mike); //true

/* in 연산자 */
function isAdult(name, age){
    if(!('age' in Mike) || age < 20){
        return false;
    }
    return true;
}

const Jane = {
    name : 'Jane',
    age : 30,
}

/* 객체 for ... in */
const ilkwon = {
    name : 'ilkwon',
    age : 28,
};

for(x in ilkwon){
    //console.log(x); // name, age 출력
    console.log(ilkwon[x]); // ilkwon, 28 출력
}