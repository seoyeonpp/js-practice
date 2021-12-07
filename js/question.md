#### 클로저는 무엇이며, 어떻게/왜 사용하나요?

-> 특정 함수가 참조하는 변수들이 선언된 렉시컬 스코프는 계속 유지되는데, 그 함수랑 스코프를 묶어서 클로저라고 한다.
-> 클로저는 자신이 생성될 때의 스코프에서 알 수있었던 변수 중 언젠가 자신이 실행될 때 사용할 변수들만 기억하여 유지시키는 함수다.
-> 클로저가 기억하는 변수의 값은 언제든지 자신이나 남에의해 변경될 수 있다.

###### 사용하는 이유

1\. 현재 상태를 기억하고 변경된 최신상태를 유지할 수 있다\.
2\. 전역변수의 사용 억제
3\. 정보의 은닉 : 클래스 기반 언어의 private 키워드를 흉내낼 수있다\.

> 클로저와 클래스는 비슷한 구조를 가지고 있음. 클래스 개념이 없는 자바스크립트에서는 클래스 대신하여 쓰이기도 함.
> 
> window와 글로벌의 상관관계는?
> 자바스크립트 상속이란?

<br>
#### 변수 선언에 var를 안써줘도 동작 하지만 써줘야하는 이유

-> var를 안쓰게되면 변수가 전역에 위치하게 되기 때문에 꼭 써줘야함
<br>
```
function foo(){
    var x = "foo";
    console.log("foo : " + x);
}

function bar(){
    x = "bar";
    console.log("bar : " + x);
}
foo();
bar();
console.log("global : " + x);
```

#### window와 글로벌의 상관관계는?

브라우저의 global은 window이다.
<br>
#### 자바스크립트 상속이란?
<br>
#### this의 기능

* 메서드에서 this는 그 주인객체를 뜻한다.
* this가 단독으로 사용되면 그것은 global 객체를 뜻한다.
* 함수에서 this는 글로벌 객체를 뜻한다.
* 'use strict'; 모드에서는 this는 undefined 이다.
* 이벤트에서 this는 이벤트를 받는 element를 뜻한다.
* call()과 apply()같은 메서드에서 this는 any object를 뜻한다.

*함수에서의 this퀴즈*
아래의 결과는 어떻게 나올까??

```
var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        };
        innerFunc();
        var obj2 = {
            innerMethod: innerFunc
        }
        obj2.innerMethod();
    }
}
obj.outer();
```
<br>
#### this를 우회하는 새로운 방법(화살표함수)

화살표함수는 lexical scope에서 thisBinding 과정이 생략되어 **상위 스코프의 this를 그대로 사용할 수 있게 해준다.**
위의 퀴즈를 화살표함수로 재구성해보면, 아래와 같음 (출처 : [https://wonit.tistory.com/244?category=762174](https://wonit.tistory.com/244?category=762174))
<br>
```
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
```
<br>
#### 함수와 메서드의 차이는?

가장 큰 차이는 **독립성**이다.
함수는 그 자체로도 혼자 실행될 수 있지만, 메서드는 자신을 호출한 대상 객체에 관한 동작을 수행함

<br>
#### Object.create

해당 함수를 통해서 값만 설정하면 읽기 전용 속성이 되어서 값을 수정할 수 없게 됨.
Object.defineProperty 설정 파라미터중, writable 을 true 로 설정해야 해당 속성에 새로운 값을 설정할 수 있음.

<br>
<br>
