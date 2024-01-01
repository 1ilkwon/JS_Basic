/* Object _ method, this 
method : 객체 프로퍼티로 할당된 함수
this : 객체 자신 (런타임에 결정됨)
-> 화살표 함수의 this는 전역객체를 가르킨다.
*/
const user = {
    name : 'Mike',
    sayHello:function(){
        console.log(`hello, i'm${this.name}`);
    }
}
console.log(user);


let boy ={
    name:'Mike',
    showName: function(){
        //console.log(boy.name);
        console.log(this.name); // boy를 null로 할당하더라도 man은 this를 통해 error 없이 사용가능
    }
};
//boy.showName();

let man = boy;
// man.name = 'Tom';
// console.log(boy.name); // Tom 
boy =null;
man.showName(); // ? -> error 
