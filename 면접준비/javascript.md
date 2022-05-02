# JavaScript

## var, let, const + 호이스팅

-   [참고자료1](https://www.howdy-mj.me/javascript/var-let-const/), [참고자료2](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90), [참고자료3](https://medium.com/@su_bak/javascript-var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-9fab5c264c9c)
-   자바스크립트에서 변수선언은 <b>선언 -> 초기화 -> 할당</b> 단계를 통해 수행된다.
-   var 키워드를 통한 변수 선언은 스코프 선두에서 선언과 초기화 단계가 동시에 진행.

    ```javascript
    // 스코프의 선두에서 선언 단계와 undefined로 초기화

    console.log(foo); // undefined

    var foo;
    console.log(foo); // undefined

    foo = 1; // 할당문에서 할당 단계가 실행된다.
    console.log(foo); // 1
    ```

-   let과 const는 변수 중복선언이 불가능하며 블록레벨 스코프 지원
-   let으로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행
-   const으로 선언한 변수는 선언 단계와 초기화 단계가 동시에 진행

    ```javascript
    // 스코프의 선두에서 선언 단계가 실행된다.(호이스팅은 됨)
    // 하지만 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않음.
    // 따라서 변수 선언문 이전에 변수를 참조할 수 없다.
    // 발생하는 오류의 내용이 다르다.

    console.log(foo); // ReferenceError: foo is not defined

    let foo; // 변수 선언문에서 초기화 단계가 실행된다.
    console.log(foo); // undefined

    foo = 1; // 할당문에서 할당 단계가 실행된다.
    console.log(foo); // 1

    console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization
    const name = "yu";
    ```

### 호이스팅

-   var 선언문이나, function 선언문 등을 해당 스코프의 맨 앞으로 옮긴것처럼 동작하는 특성
-   let, const 를 포함하는 모든 선언(var, let, const, function, function\*, class)을 호이스팅 한다.
-   호이스팅에는 함수 호이스팅과 변수 호이스팅이 있는데, 변수 호이스팅은 각 변수 선언 키워드마다 차이가 있다.
-   함수 호이스팅은 함수 선언식을 통해 만든 함수는 해당 함수의 내부 블럭까지 호이스팅되어 어디서든 사용 가능
-   함수 표현식은 변수 호이스팅과 동일하게 동작하기 때문에 유의하여 코드를 작성해야 한다.

### 정리

-   Scope 관점에서 차이 : var는 함수 스코프이고, let, const는 블록 스코프이다.
-   변수선언 단계에서의 차이
    -   var는 선언 + 초기화 함께, var는 호이스팅 되며 값이 없으면 undefined으로 초기화
    -   let은 선언과 초기화가 분리(is not defined에러)
    -   const는 선언 + 초기화 함께(cannot access before init)

## 이벤트 루프

-   [참고자료1](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84), [참고자료2](https://meetup.toast.com/posts/89), [참고자료3](https://medium.com/sjk5766/javascript-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-event-loop-%EC%A0%95%EB%A6%AC-422eb29231a8)
-   자바스크립트 엔진은 Memory Heap과 Call Stack으로 구성, 구글의 V8 Engine
-   자바스크립트는 단일 쓰레드로 비동기 동작을 원래 지원하지 않는다.
-   브라우저가 Web API, Event Table, Callback Queue, Event Loop를 지원한다.
-   Web API는 브라우저에서 제공하는 API로 DOM, Ajax, Timeout등이 있다.
-   Call Stack에서 비동기 함수 호출 -> Web API 호출 -> Web API는 콜백함수를 Callback Queue에 넣는다.

### Web API

-   DOM, Ajax, setTimeout 등 브라우저가 제공하는 API
-   setTimeout이 callstack에 들어와 실행되면 Browser API인 timer를 호출

### Event Table

-   특정 이벤트(timeout, click 등)가 발생했을때 어떤 callback 함수가 호출되어야 하는지를 담고있는 자료구조

### Callback Queue

-   이벤트 발생시 실행해야할 callback 함수가 Callback Queue에 추가

### Job Queue (Micro task queue)

-   promise를 사용할때 callback 함수 역할을 하는 thenable 메서드가 해당 queue에 들어감.
-   <b>callback queue보다 우선순위가 높다</b>

### Event Loop

-   call Stack과 callback Queue, Job Queue(Micro task queue)를 감시한다.
-   call Stack이 비었을 때 Job Queue에서 기다리는 모든 작업 처리후 callback Queue에서 함수를 꺼내 call Stack에 추가

## 함수 선언식, 함수 표현식, 화살표 함수

-   [참고자료1](https://velog.io/@bigbrothershin/%EC%98%A4%EB%8A%98-%EA%B3%B5%EB%B6%80%ED%95%A0-%EA%B2%832020.1.30), [참고자료2](https://velog.io/@seeh_h/%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EC%8B%9D-vs-%ED%95%A8%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D), [참고자료3](https://github.com/imacoolgirlyo/javascript#functions--declarations)

### 함수 선언식

-   함수 이름이 명시되어있어야 한다.
-   함수 이름으로 함수를 호출
-   런타임 이전에 코드 평가 과정에서 함수 객체가 먼저 생성되는 <b>함수 호이스팅</b> 발생
    ```javascript
    example1();
    function example1() {
        console.log("hello");
    } // 함수 선언
    ```

### 함수 표현식

-   함수 리터럴로 생성한 함수를 변수에 할당
-   함수의 참조값이 변수로 저장
-   변수 호이스팅 발생

    ```javascript
    const example2 = function () {
        console.log("hello");
    };
    // 변수 example2에 함수 할당

    example2(); // 함수 호출
    ```

### 차이

-   함수

    ```
    example1(); // 'hello'
    example2(); // undefined

    function example1(){ console.log('hello') } // 세미콜론(;) X
    var example2 = function(){ console.log('hello') }; // 세미콜론 O
    ```

### 정리

-   함수 선언문으로 선언된 함수는 함수 호이스팅이 발생한다.  
    런타임 이전에 함수 객체가 생성이 되므로 함수가 정의되기 전에 함수를 호출할 수 있다.
-   함수 표현식으로 선언된 함수는 변수 호이스팅이 발생하며, undefined로 초기화된다.  
    그러므로 함수 선언문으로 선언한 함수는 함수가 정의되기 전에 함수를 호출할 수 없다.
-   함수 호이스팅은 함수를 사용하기 전에 반드시 함수를 선언해야한다는 규칙을 무시하므로 함수 표현식을 권장하며  
    디버깅의 편의성을 위해 함수 이름이 있는 기명 함수 표현식을 사용하는것을 권장한다고 한다.

    ```javascript
    // bad
    function foo() {
        // ...
    }

    // bad
    const foo = function () {
        // ...
    };

    // good
    // lexical name distinguished from the variable-referenced invocation(s)
    const short = function longUniqueMoreDescriptiveLexicalFoo() {
        // ...
    };
    ```

## 렉시컬 스코프

-   자바스크립트는 함수를 선언한 시점에 상위 스코프가 결정되는 렉시컬 스코프를 따른다.
-   함수를 어디에서 호출하였는지는 스코프 결정에 의미를 주지 않는다.
-   스코프는 함수를 <b>호출</b>할때가 아니라 <b>선언</b>할 때 생긴다.

    ```javascript
    var name = "zero";
    function log() {
        console.log(name);
    }

    function wrapper() {
        name = "nero";
        log();
    }
    wrapper();
    //결과 : nero
    ```

    ```javascript
    var name = "zero";
    function log() {
        console.log(name);
    }

    function wrapper() {
        var name = "nero";
        log();
    }
    wrapper();
    //결과 : zero
    //log 함수가 한번 선언된 이상 전역 변수를 가리키게 되어있는 console.log(name)의 name이 다른걸 가리키게 할 수 없다.
    ```

## 클로저

-   [참고자료1](https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C), [참고자료2](https://poiemaweb.com/js-closure)

    ```javascript
    function outerFunc() {
        var x = 10;
        var innerFunc = function () {
            console.log(x);
        };
        return innerFunc;
    }

    /**
     *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
     *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
     */
    var inner = outerFunc();
    inner(); // 10
    ```

### 클로저 필요한 이유

1. 전역 변수를 줄일 수 있다.

    ```javascript
    //before
    const btn = document.querySelector("button");

    btn.addEventListener("click", handleClick);

    let count = 0;
    function handleCilck() {
        count++;
        return count;
    }
    ```

    ```javascript
    //after
    const btn = document.querySelector("button");

    btn.addEventListener("click", handleClick());

    function handleCilck() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    ```

2. 비슷한 형태의 코드 재사용률을 높일 수 있음

    ```javascript
    const newTag = function (open, close) {
        return function (content) {
            return open + content + close;
        };
    };

    const bold = newTag("<b>", "</b>");
    const italic = newTag("<i>", "</i>");

    console.log(bold(italic("This is my content!")));
    //<b><i>This is my content!</i></b>
    ```

3. var 관련 문제 해결

    ```javascript
    let funcArr = [];

    for (var i = 0; i < 5; i++) {
        var c = i * 2;
        funcArr.push(() => console.log(c));
    }
    funcArr.forEach((fn) => fn());
    //결과는 8, 8, 8, 8, 8 이 나온다.
    //funcArr에 저장된 함수들이 각각의 var c를 갖지 않기 때문이다.
    ```

    var의 선언을 let으로 바꾸거나 클로저를 이용한다.

    ```javascript
    let funcArr = [];

    for (var i = 0; i < 5; i++) {
        ((_) => {
            var c = i * 2;
            funcArr.push((_) => console.log(c));
        })();
    }

    funcArr.forEach((f) => f());
    ```

### 클로저가 아닌것

-   함수를 리턴한다고 모두 클로저가 아니다.
-   <b>내부에 선언된 함수가 외부 함수의 지역변수를 사용했을때</b>만 클로저라고 선언된다.
    ```javascript
    //클로저 아님
    function outer() {
        let hello = "hello";
        if (true) {
            let world = "world";
            return function inner() {
                console.log(world);
            };
        }
    }
    ```
    ```javascript
    function outer() {
        let hello = "hello";
        if (true) {
            let world = "world";
            return function inner() {
                console.log(world);
                console.log(hello);
            };
        }
    }
    ```

### 정리

-   클로저는 내부 함수에서 외부 함수의 지역변수를 사용할 때 외부 함수의 렉시컬과 함께 combination
-   클로저는 반환된 내부함수가 자신이 선언되었을 때의 환경(렉시컬 스코프)을 기억하여 선언된 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수
-   클로저 사용을 통해 전역번수의 사용을 억제할 수 있고, 캡슐화하여 데이터 은닉 가능
-   모든 함수는 각자의 실행 컨텍스트에 스코프 체인을 갖고 있는데,  
    외부 함수에 대한 실행이 종료되어도 스코프 체인은 유지된다는 원리를 통해 클로저의 구현이 가능  
    (스코프 체인을 통한 외부 함수의 실행 컨텍스트에 대한 객체 변수에 접근이 가능)

## this (call, apply, bind)

-   [참고자료1](https://nykim.work/71)
-   자신이 속한 객체 or 자신이 생성할 인스턴스를 가리키는 참조변수.
-   함수의 호출 방식에 따라 특정 객체를 바인딩
-   기본적으로 브라우저에서는 window, node.js에서는 global을 가리킨다.
-   this 호출방법 (함수에서 this / 메서드에서 this / 생성자 안에서 this / apply,call,bind 에서 this / 화살표 함수에서 this)

1. 함수에서 this 사용

    - 함수의 주인인 window객체에 바인딩 된다.
    - strict mode에서는 default binding이 없을시 undefined

2. 메서드 안에서 this 사용

    - 일반 함수가 아닌 객체 내의 함수
    - 해당 메서드를 호출한 객체로 바인딩 된다.

    ```javascript
    var person = {
        firstName: "seungjae",
        lastName: "yu",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };

    console.log(person.fullName()); //"seungjae yu"
    ```

    ```javascript
    var num = 0;

    function showNum() {
        console.log(this.num);
    }

    showNum(); //0

    var obj = {
        num: 200,
        func: showNum,
    };

    obj.func(); //200
    ```

3. 생성자 안에서 쓴 this

    - 생성자 함수가 생성하는 객체로 this가 바인딩

    ```javascript
    function Person(name) {
        this.name = name;
    }

    var kim = new Person("kim");
    var lee = new Person("lee");

    console.log(kim.name); //kim
    console.log(lee.name); //lee
    ```

    하지만 new 키워드가 없다면 일반 함수 호출로 처리하여 this가 window에 바인딩

    ```javascript
    var name = "window";
    function Person(name) {
        this.name = name;
    }

    var kim = Person("kim");

    console.log(window.name); //kim
    ```

4. 명시적 binding - apply, call, bind

    - 명시적으로 this를 알맞은 객체로 바꾸는것을 의미한다.
    - call과 apply는 첫번째 인자로 this를 대체할 값을 받고, 이후에 parameter를 받는다.
    - apply는 array형태로 받는것이 call과 apply의 차이이다.
    - bind는 call, apply와 달리 함수를 바로 실행하지 않는다.

    ```javascript
    const obj = { name: "yu" };

    const say = function introduce(city) {
        console.log(`hello, my name is ${this.name}, I live in ${city}`);
    };

    say("seoul");
    say.call(obj, "seoul");
    say.apply(obj, ["seoul"]);

    const func = say.bind(obj);
    func("seoul");
    ```

5. 화살표 함수에서의 this

-   일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,  
    함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
-   화살표 함수에는 this라는 변수 자체가 존재하지 않기 때문에 그 상위 환경에서의 this를 참조(Lexical this).

    ```javascript
    //화살표 함수는 call, apply, bind로 this를 바꿀수없다.
    window.x = 1;
    const normal = function () {
        return this.x;
    };
    const arrow = () => this.x;

    console.log(normal.call({ x: 10 })); // 10
    console.log(arrow.call({ x: 10 })); // 1
    ```

-   화살표 함수를 사용하면 안되는 케이스 1 : 메소드

    ```javascript
    // Bad
    const person = {
        name: "Lee",
        sayHi: () => console.log(`Hi ${this.name}`),
    };

    person.sayHi(); // Hi undefined

    // Good
    const person = {
        name: "Lee",
        sayHi() {
            // === sayHi: function() {
            console.log(`Hi ${this.name}`);
        },
    };

    person.sayHi(); // Hi Lee
    ```

-   화살표 함수를 사용하면 안되는 케이스 2 : 생성자 함수

    ```javascript
    const Foo = () => {};
    const foo = new Foo(); // TypeError: Foo is not a constructor
    ```

### 정리

1.  생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스와 바인딩
2.  call, apply, bind 사용시 함수의 첫번째 인자로 전달하는 객체에 바인딩
3.

## Iterable, Iterator + Generator

-   [참고자료1](https://bbaktaeho-95.tistory.com/79)
-   iterable : 반복 가능한 / iterator : 반복자

### iterable

-   자바스크립트에서 배열은 반복가능한 객체(object)
-   반복이 가능하다 ==> iterable
-   for of 반복문으로 순회 가능(해당 문법은 iterable 객체만 사용 가능)
-   iterable : iterator를 리턴하는 [Symbol.iterator]()를 가진다.

    ```javascript
    const arr = [1, 2, 3, 4];
    const set = new Set([1, 2, 3, 3, 5, 2]);
    const map = new Map([
        ["a", "A"],
        ["b", "B"],
    ]);
    const obj = { a: 1, b: 2 };
    console.log(arr[Symbol.iterator]());
    console.log(set[Symbol.iterator]());
    console.log(map[Symbol.iterator]());
    console.log(obj[Symbol.iterator]());

    //실행 결과
    Object [Array Iterator] {}
    [Set Iterator] { 1, 2, 3, 5 }
    [Map Entries] { [ 'a', 'A' ], [ 'b', 'B' ] }
    console.log(obj[Symbol.iterator]());
                                    ^
    TypeError: obj[Symbol.iterator] is not a function
    ```

### iterator

-   {value, done} 객체를 리턴하는 next()를 가진 값
-   value는 값으로 여러 타입이 올 수 있으며 done은 boolean 타입

### Generator

-   iterator를 발생시키는 함수
-   function\* 키워드를 이용

    ```javascript
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
        return -1;
    }
    const iter = gen();
    for (item of iter) console.log(item);
    // 실행 결과
    //1
    //2
    //3
    ```

## module require, import

-   [참고자료1](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/module.md)

### 모듈(module)이란 ?

-   모듈이란 여러 기능들에 관한 코드가 모여있는 하나의 파일 로 다음과 같은 것들을 위해 사용한다.

    -   <b>유지보수성</b> : 기능들이 모듈화가 잘 되어있다면, 의존성을 그만큼 줄일 수 있기 때문에 어떤 기능을 개선한다거나 수정할 때 훨씬 편하게 할 수 있다.
    -   <b>네임스페이스화</b> : 자바스크립트에서 전역변수는 전역공간을 가지기 때문에 코드의 양이 많아질수록 겹치는 네임스페이스가 많아질 수 있다.  
        그러나 모듈로 분리하면 모듈만의 네임스페이스를 갖기 때문에 그 문제가 해결된다.
    -   <b>재사용성</b> : 똑같은 코드를 반복하지 않고 모듈로 분리시켜서 필요할 때마다 사용할 수 있다.

### require

-   CommonJS에서 사용하는 모듈을 불러오는 키워드.
-   사용할때는 require, 해당 스코프 밖으로 보낼때에는 module.exports
-   node.js에서는 이 방식 사용
-   여기서 module.exports 의 module 은 현재 모듈에 대한 정보를 갖고 있는 객체이다. 이는 예약어이며 그 안에 id , path , parent 등의 속성이 있고 exports 객체를 가지고 있다.

    ```js
    //a.js
    const printHelloWorld = () => {
        console.log("Hello Wolrd");
    };

    module.exports = {
        printHelloWorld,
    };
    ```

    ```js
    //b.js
    const func = require("./a.js"); // 같은 디렉토리에 있다고 가정
    func.printHelloWorld();
    ```

### exports vs module.exports

-   module.exports 는 빈 객체를 참조한다.
-   exports 는 module.exports 를 참조한다.
-   require 는 항상 module.exports 를 리턴받는다.

    ```js
    //두가지 모두 사용 가능
    exports.printHelloWorld = printHelloWorld;
    module.exports = { printHelloWorld };
    ```

### import, export

-   ES6(ES2015) 방식이다.
    ```js
    //moduleA.js
    const A = () => {};
    export default A;
    ```
    ```js
    //moduleB.js
    export const B = () => {};
    ```
    ```js
    //index.js
    import A from "moduleA";
    import { B } from "moduleB";
    ```

### 정리

-   최근 ES6(ES2015) 모듈 시스템인 import를 많이 사용하지만, 100% 대체는 불가능
-   babel같이 ES6 코드를 트랜스파일링 해주는 도구를 쓸 수 없는 경우에는 require를 사용해야함

## 디바운싱, 쓰로틀링

-   [침고자료1](https://flamingotiger.github.io/javascript/throttle-debounce/), [참고자료2](https://velog.io/@yujuck/Javascript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EB%A7%81), [참고자료3](https://thewavelet.tistory.com/65?category=752296)

### 디바운싱

-   연속적인 함수 호출시 맨 마지막 or 처음 함수만 호출시키는것
-   동일한 이벤트 받을경우 지정한 시간동안 실행하지않고 버티다가 지정한 시간이 지나면 발생
-   검색창 검색어 자동완성에 주로 사용

    ```javascript
    //동작 원리를 반영한 코드
    var timer;

    document.querySelector("#input").addEventListener("input", function (e) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            // 실행 코드 내용
        }, 200);
    });
    ```

    ```javascript
    //lodash 라이브러리 이용한 코드
    function Search({ onSearch }) {
        const [value, setValue] = React.useState("");

        // This is the solution
        const debouncedSearch = React.useMemo(
            () =>
                debounce((val) => {
                    onSearch(val);
                }, 750),
            [onSearch]
        );

        const handleChange = React.useCallback(
            (e) => {
                setValue(e.target.value);
                debouncedSearch(e.target.value);
            },
            [debouncedSearch]
        );

        return <input type="text" value={value} onChange={handleChange} />;
    }
    ```

### 쓰로틀링

-   마지막으로 함수가 호출된 이후 일정 시간동안 다시 호출되지 않게 하는것
-   이벤트 발생 즉시 실행되고 그 다음 지정한 시간동안 발생되지 못하게 막고, 그 시간이 지나면 다시 이벤트 발생
-   스크롤 이벤트나 좌표값으로 지도의 정보를 가져오는 경우 사용
    ```javascript
    //원리를 반영한 코드
    var timer;
    document.querySelector(".body").addEventListener("scroll", function (e) {
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                // 실행할 코드 내용
            }, 200);
        }
    });
    ```

## Promise와 Callback의 차이 및 장단점

-   둘다 자바스크립트에서 비동기 처리를 위해 사용
-   Callback은 함수의 처리 순서를 보장하기 위해 함수를 중첩하여 콜백지옥이 발생하는 단점과 에러처리가 힘들다
-   이러한 단점을 해결하기 위해 Promise가 ES6에 채택되어 사용

## async, await이 무엇인지, promise와 차이

-   async, await을 사용하면 Promise, then보다 코드가 간결해지며 에러 핸들링시 try-catch 사용
-   async가 사용된 함수는 promise를 반환

## 자바스크립트 성능 최적화

-
