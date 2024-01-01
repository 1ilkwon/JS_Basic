/* Array
- 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함 가능.
- length : 배열의 길이
- push() : 배열 끝의 추가
- pop() : 배열 끝 요소 제거
- shift() : 배열 앞에 제거
- unshift() : 배열 앞에 추가
- for ... of : 배열 요소를 하나씩 접근
    for(let day of days){
        console.leg(day);   
    }

*/
let arr = [
    '민수',
    23,
    false,
    {
        name : 'Mike',
        age : '23',
    },
    function(){
        console.log('Test');
    }
];
console.log(arr); 
console.log(arr[2]); // false
arr[2] = true; 
console.log(arr[2]); //true

for(let idx of arr){
    console.log(idx);
}

