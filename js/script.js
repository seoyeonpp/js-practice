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