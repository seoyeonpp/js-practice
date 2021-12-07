// ****스코프 예제
const a = "candy";

function snack() {
    const b = 'chocolate';
    document.write(a); //candy
}
//document.write(b); //Uncaught ReferenceError: b is not defined b는 지역변수이기 때문에 전역에서 접근 불가
snack();

// ****catch 구문의 스코프 생성
try {
    console.log('try 블록 시작');
    // notDefined; // 정의되지않은 변수 불러서 catch 구문으로 넘어감 
    console.log('try 블록 끝');
    console.log(err); //❓ err가 없기때문에 catch 문이 실행됨.
} catch(err) {
    var test = 'test';
    console.log(err); //ReferenceError: notDefined is not defined
    console.log('에러가 발생 ');
}
// console.log(err); //Uncaught ReferenceError: err is not defined , err는 밖에서는 접근불가
console.log(test); //catch 안에 선언된 var 변수는 밖에서 접근 가능, let,const 접근 불가


// ****클로저
// 1
function f1() {
    var a= 10;
    var f2 = function(c) {
        return a + b + c;
    };
    var b = 20;
    return f2; //리턴을 해줘야함.
}
var f3 = f1();
console.log(`결과값은 : ${f3(30)}`); //60

// 2
function f4() {
    var a = 10; //a는 사라지지 않고 내부함수가 참조중
    function f5(b){
        return a + b;
    }
    return f5; // 만약 f4의 실행결과인 f5를 리턴하지 않았다면 클로저가 아님.
}
var f6 = f4(); // f5가 f6에 담겼다. 
console.log(`f6은 ${f6(30)}`); //40


// ***변수 타입
console.log(typeof null); //object
//기본형인 null의 타입이 object가 뜨는것은 자바스크립트 초기버전의 버그이다. 
// null타입 체크 방법 : 값과 타입이 동일할때만 true가 반환되는 일치연산자(===)로 타입체크를 하면 좋음.

// ***new String('') 과 String('')의 차이
function diffrence() {
    let nString = new String('배민'),
        str = String('배민');

    console.log(typeof nString, typeof str);//object, string 반환
    console.log(nString == str); // true
    console.log(nString === str); // false
    console.log(nString.constructor == String); // true
};
diffrence();


// ***기본형은 추가 속성을 선언할 수 없다. 
// 객체
var constructString = new String('hello');
constructString.greet = 'welcome';
console.log(constructString.greet === 'welcome'); //true
console.log(constructString.greet); //welcome

// 기본형
var primitiveString = 'hello';
primitiveString.greet = 'welcome';
console.log(primitiveString.greet === 'welcome'); //false
console.log(primitiveString.greet); //undefined

// 양쪽 공백을 없애는 trim  함수
// String.prototype.trim = function () {
//     return this.replace(/^\s+|\s+$/g, "");
// };
// 이처럼 prototype 에 사용자 정의 함수를 추가해서 활용할 수 있다. 
console.log('            dddd     '.trim() === 'dddd'); //true


// ***접근방식
var hi = 'hi',
    variableName = hi;
console.log(hi); //hi
console.log(window.hi); //hi
console.log(window['hi']); //hi
console.log(window[variableName]); //hi
// 굳이 eval() 함수를 사용하지 않아도 됨. 


// ***프로토타입
//  es6에서는 __proto__를 표준으로 채택했다. 하지만 여전히 코드 내에서는 Object.getPrototypeOf()의 사용을 권장함.
// __proto__와 Object.getPrototypeOf()은 동일한 값 반환
const christmas = {
    month : 'december',
    food : 'cake'
}
console.log(Object.getPrototypeOf(christmas)); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(christmas.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


// ***함수에서의 this
var obj = {
    outer: function () {
        console.log(this); //outer
        var innerFunc = function () {
            console.log(this); //window 와 innerMethod???? 함수로 호출됨 + innerMethod의 메서드로 호출됨 인가?
        };
        innerFunc();
        var obj2 = {
            innerMethod: innerFunc
        }
        obj2.innerMethod();
    }
}
obj.outer();

// 화살표 함수에서의 this
var obj = {
    outer: function () {
        console.log(this); //outer
        var innerFunc = () => {
            console.log(this); //outer
        }
        innerFunc();
    }
}
obj.outer();

