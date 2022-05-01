# React

## React LifeCycle

-   constructor -> componentWillMount -> componentDidMount -> componentWillUnmount

### mount

-   constructor : 컴포넌트의 인스턴스 만들때마다 생성자 메서드 호출
-   render : 화면에 표시될 JSX 반환하고 화면에 그림
-   componentDidMount : 컴포넌트 화면에 모두 그려진 이후 호출

### update

-   render : 화면에 표시될 JSX 반환하여 컴포넌트를 DOM에 마운트
-   componentDidUpdate : 갱신이 일어난 직후 호출

## React Hook Life Cycle

-   [참고자료1]('https://krpeppermint100.medium.com/js-useeffect%EB%A5%BC-%ED%86%B5%ED%95%9C-react-hooks%EC%9D%98-lifecycle-%EA%B4%80%EB%A6%AC-3a65844bcaf8')
-   useEffect를 사용해 LifeCycle 관리 가능
-   useEffect는 componentDidMount, componentDidUpdate, component

### useEffect의 componentDidMount

```jsx
//컴포넌트가 마운트 된 이후에 콘솔 로그 보여줌
import React, { useState, useEffect } from "react";
export const HooksLifeCycle = () => {
    useEffect(() => {
        console.log("component did mount with useEffect!");
    });
    return (
        <div>
            <h1>Hello?</h1>
        </div>
    );
};
```

### useEffect의 componentDidUpdate

```jsx
//버튼 클릭할때마다 state가 변경되며
//리렌더링 > useEffect작동하며 componentDidUpdate 역할
import React, { useState, useEffect } from "react";
export const HooksLifeCycle = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("component did mount with useEffect!");
    });
    return (
        <div>
            <h2>number is {number}</h2>
            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
};
```

### useEffect의 componentWillunmount

-   컴포넌트가 수명을 다하고 사라질 때 하는 행동을 의미
-   useEffect에 return 사용

    ```jsx
    import React, { useState, useEffect } from "react";
    export const HooksLifeCycle = () => {
        const [number, setNumber] = useState(0);
        useEffect(() => {
            console.log("component did mount with useEffect!");
            return () => {
                console.log("I'm dying...");
            };
        }, [number]);
        return (
            <div>
                <h2>number is {number}</h2>
                <button
                    onClick={() => {
                        setNumber(number + 1);
                    }}
                >
                    Increment
                </button>
            </div>
        );
    };
    ```

## React가 re- rendering 하는 조건

-   부모 컴포넌트 렌더링
-   state 변경
-   props 변경
-   class component의 forceUpdate

## Virtual DOM 개념 및 비교 알고리즘

-   [참고자료1]('https://velog.io/@gwak2837/React-Virtual-DOM-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0'), [참고자료2]('https://yeoulcoding.me/147')
-   기존에는 화면을 다시 그릴때마다 jQuery나 document.getElementById, document.querySelector를 통해  
    DOM노드를 검색하고 수정하거나 특정 위치에 노드를 추가-삭제 --> 이렇게 DOM 노드에 CRUD 작업을 하는것은 비싸다.
-   브라우저가 HTML Parser를 통해 HTML 태그들을 DOM tree -> CSS적용하여 Render Tree -> Reflow , Repaint를 거쳐  
    각 노드들의 좌표를 계산하고 색을 칠해 화면에 그려내는 복잡한 작업을 수행

### Virtual DOM ?

-   DOM 차원에서의 더블 버퍼링 개념
-   개발자가 DOM을 조작할때 직접 브라우저의 DOM을 조작하는 것이 아니라, 가상의 DOM을 조작하고,  
    리액트는 가상의 DOM 조작이 어느정도 마무리되면 변경사항을 한꺼번에 실제 브라우저의 DOM에 반영
-   예를들어, DOM 조작을 50번 정도 실행하는 코드가 있다면 브라우저의 DOM을 직접 조작하도록 설계되었다면  
    브라우저는 실제 사용자가 보기에 많은 내용이 바뀌지 않았더라도 50번이나 모든 노드들의 위치와 css를 다시 계산하고 그려내야함
-   virtual DOM은 변경되어도 브라우저가 repaint, reflow등의 연산을 수행하지 않음.
-   DOM 조작시 Batch Queue에 모아두고 모두 처리후에 한꺼번에 업데이트 사항을 브라우저의 DOM에 반영하게 된다.

### Reconciliation Algorithm

-   [참고자료]('https://www.huskyhoochu.com/virtual-dom/')
-   상태가 변하거나 프로퍼티가 변해서 DOM을 업데이트 해야하는 경우, 변경된 부분만 감지해서 바뀐 부분만 업데이트
-   Virtual DOM끼리의 비교를 의미하며, React는 이전상태와의 비교를 위해 항상 이전 상태의 Virtual DOM의 사본을 갖고있다.
-   일반적인 트리구조의 비교는 O(n^3)이나, 휴리스틱 알고리즘을 통해 O(n)에 해결 -> 다 비교x, 필요한 부분만 비교한다.

    1. 같은 계층

        - 비슷한 컴포넌트는 트리 내 동일한 계층에 위치할 것.
        - 해당 컴포넌트가 갑자기 부모가 바뀌는일이 없다고 가정하고 같은 계층에 있는 컴포넌트끼리만 비교
        - React는 DOM 트리를 level-by-level로 탐색
        - 부모 태그의 타입이 바뀌는 순간 아래 자식들은 굳이 탐색할것 없이 새로 렌더링 해버리는게 나음(ex: div -> span)

    2. 노드에 key를 부여하여 일일이 탐색하지 않고 접근
        - React는 자식 element를 비교할 때 이전 목록과 다음 목록의 순서에 따라 업데이트 여부를 결정한다.
            ```html
            <ul>
                <li>first</li>
                <li>second</li>
            </ul>
            ⬇︎
            <ul>
                <li>first</li>
                {/* 그대로군. */}
                <li>second</li>
                {/* 그대로군. */}
                <li>third</li>
                {/* 추가됐네. 새로 렌더링! */}
            </ul>
            ```
            ```html
            <ul>
                <li>first</li>
                <li>second</li>
            </ul>
            ⬇︎
            <ul>
                <li>zero</li>
                {/* first가 zero가 됐군. 새로 렌더링! */}
                <li>first</li>
                {/* second가 first가 됐군. 새로 렌더링! */}
                <li>second</li>
                {/* 추가됐네. 새로 렌더링! */}
            </ul>
            ```
        - 이건 굉장한 낭비다.  
          react는 반복되는 element에 key를 부여하도록하고, 노드의 순서가 바뀌어도 key를 통해 비교한다.
            ```html
            <ul>
                <li key="a">first</li>
                <li key="b">second</li>
            </ul>
            ⬇︎
            <ul>
                <li key="c">zero</li>
                {/* 추가됐네. 새로 렌더링! */}
                <li key="a">first</li>
                {/* 아까 그 녀석이군. 순서만 바꾸자. */}
                <li key="b">second</li>
                {/* 아까 그 녀석이군. 순서만 바꾸자. */}
            </ul>
            ```

### reconciliation을 피하자

-   잘못된 코드의 예
    ```jsx
    //props에 익명함수를 전달하게 되면 전달될 때마다 다른 레퍼런스를 갖는다.
    <div>
        <Item item={this.state.item} deleteItem={() => this.deleteItem()} />
    </div>
    ```
    ```jsx
    //따로 변수에 할당된것이 아니기 때문에 만들어질 때마다 새로운 레퍼런스를 갖기때문에
    //불필요한 업데이트를 거듭한다.
    <Item item={{
                kind: 'article',
                length: 3,
                etc: result.item,
                ...
            }} deleteItem={() => this.deleteItem()} />
    ```

## React Hooks

-   class에서만 사용 가능했던 state를 hook을 이용해 함수형 컴포넌트에서 useState 사용
-   useEffect를 통해 componentDidMount, componentDidUpdate, componentWillUnmount 처리 가능

### useEffect

-   위의 설명 + dependency array
-   1. component가 mount 되었을 때
    ```jsx
    useEffect(() => {
        console.log("마운트 될 때에만 실행");
    }, []);
    ```
-   2. 렌더링 될 때마다
    ```jsx
    useEffect(() => {
        console.log("렌더링 될 때마다 실행");
    });
    ```
-   3. 특정값이 업데이트 될 때마다 실행
    ```jsx
    useEffect(() => {
        console.log(val);
        console.log("마운트 될 때에만 실행");
    }, [val]);
    ```
-   4. 마운트 되었을때에만 또는 업데이트시에만 실행되게도 할 수 있다.

    ```jsx
    const mounted = useRef(false);
    useEffect(() => {
        if(mounted.current === false) {
            //처음 mounted 일떄에만 실행
            mounted.current = true;
        } else {
            //update시 수행
        }

    },[vals...]);
    ```

-   5. unmount 될 때

    ```jsx
    useEffect(() => {
        return () => {
            console.log("clean up");
        };
    }, []);
    ```

-   6. update 되기 직전에

    ```jsx
    //val이 업데이트 되기 전에
    useEffect(() => {
        return () => {
            console.log(val);
        };
    }, [val]);
    ```

### useLayoutEffect

-   [참고자료]('https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5')
-   useLayoutEffect는 컴포넌트들이 render된 후 실행 > 이후에 paint 진행
-   동기적으로 실행
-   paint 되기전에 실행되기때문에 dom을 조작하는 코드가 있더라도 깜빡임x
-   로직이 복잡할경우 사용자가 레이아웃을 보는데 까지 시간이 오래걸린다는 단점이 있다.
-   아래와 같이 화면이 깜빡거리는 상황 + state 조건에 따라 첫 painting이 다르게 렌더링되어야 할 때

    ```jsx
    const Test = (): JSX.Element => {
        const [value, setValue] = useState(0);

        useLayoutEffect(() => {
            if (value === 0) {
                setValue(10 + Math.random() * 200);
            }
        }, [value]);

        console.log("render", value);

        return <button onClick={() => setValue(0)}>value: {value}</button>;
    };
    ```

### useState

-   useState를 사용하여 상태를 업데이트 할 때 즉시 반영되지 않는다.
-   이는 useState가 비동기로 동작하기 때문.
-   re - rendering 이후에 업데이트 된 state가 반영된다.
-   즉시 반영해야할 때 useEffect를 사용한다.

    ```jsx
    const [value, setValue] = useState(0);

    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);

    // Expected value: 3
    // Result value: 1
    ```

    함수형 업데이트를 통해 처리 가능하다.

    ```jsx
    const [value, setValue] = useState(0);

    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);
    setValue((prev) => prev + 1);

    // Expected value: 3
    // Result value: 3
    ```

### useMemo & useCallback

-   [참고자료1]('https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html')
-   함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다.
-   하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 된다.

#### useMemo

-   [참고자료1]('https://velog.io/@kysung95/%EC%A7%A4%EB%A7%89%EA%B8%80-useMemo')
-   하위 컴포넌트에서 a,b를 전달받아 <b>서로 다른</b> 함수로 각각의 값을 계산한다.

    ```jsx
    //React 공식문서 설명
    const memorizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

    ```jsx
    //App.js

    import React, { useState } from "react";
    import ShowState from "./ShowState";

    const App = () => {
        const [number, setNumber] = useState(0);
        const [text, setText] = useState("");

        const increaseNumber = () => {
            setNumber((prevState) => prevState + 1);
        };

        const decreaseNumber = () => {
            setNumber((prevState) => prevState - 1);
        };

        const onChangeTextHandler = (e) => {
            setText(e.target.value);
        };

        return (
            <div className="App">
                <div>
                    <button onClick={increaseNumber}>+</button>
                    <button onClick={decreaseNumber}>-</button>
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={onChangeTextHandler}
                    />
                </div>
                <ShowState number={number} text={text} />
            </div>
        );
    };

    export default App;
    ```

    ```jsx
    //ShowState.js

    import React from "react";
    import "./styles.css";

    const getNumber = (number) => {
        console.log("숫자가 변동되었습니다.");
        return number;
    };

    const getText = (text) => {
        console.log("글자가 변동되었습니다.");
        return text;
    };

    const ShowState = ({ number, text }) => {
        const showNumber = getNumber(number);
        const showText = getText(text);

        return (
            <div className="info-wrapper">
                {showNumber} <br />
                {showText}
            </div>
        );
    };

    export default ShowState;
    ```

-   숫자나 글자 하나만 변경되더라도 props가 변경되며 리렌더링 > 두 함수 모두 실행한다.
-   아래처럼 useMemo를 적용하면 하나가 변경되더라도, 다른값은 함수를 실행하지 않고 메모된 값을 가져와 보여준다.

    ```jsx
    //ShowState.js

    import React, { useMemo } from "react";

    const getNumber = (number) => {
        console.log("숫자가 변동되었습니다.");
        return number;
    };

    const getText = (text) => {
        console.log("글자가 변동되었습니다.");
        return text;
    };

    const ShowState = ({ number, text }) => {
        const showNumber = useMemo(() => getNumber(number), [number]);
        const showText = useMemo(() => getText(text), [text]);

        return (
            <div className="info-wrapper">
                {showNumber} <br />
                {showText}
            </div>
        );
    };

    export default ShowState;
    ```

#### useCallback

-   [참고자료1]('https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html')
-   메모된 함수를 반환한다는것이 useMemo와 가장 큰 차이이다.
-   컴포넌트가 렌더링 될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수 등)도 매번 다시 선언되어 사용된다

    ```jsx
    const memoizedCallback = useCallback(() => {
        doSomething(a, b);
    }, [a, b]);
    ```

    ```jsx
    //onChangeHalder는 파라미터로 전달받은 target.id에 따라 setState만 수행하면 됨
    //처음 마운트할때 만들고 재사용해도 문제없음
    // App.js

    import React, { useState, useCallback } from "react";

    const onChangeHandler = useCallback((e) => {
        if (e.target.id === "color") setColor(e.target.value);
        else setMovie(e.target.value);
    }, []);
    ```

    ```jsx
    const handleToggle = useCallback(
        (): void => setIsClicked(!isClicked),
        [isClicked]
    );
    ```

    함수형 업데이트를 통해 의존성을 제거할 수 있다.

    ```jsx
    const handleToggle = useCallback(
        (): void => setIsClicked((prev) => !prev),
        []
    );
    ```

#### 정리

-   만약 하위 컴포넌트가 React.memo() 같은 것으로 최적화 되어 있고  
    그 하위 컴포넌트에게 callback 함수를 props로 넘길 때,  
    상위 컴포넌트에서 useCallback 으로 함수를 선언하는 것이 유용하다
-   함수가 매번 재선언되면 하위 컴포넌트는 받은 함수가 달라졌다고 인식해 re-rendering 하기때문이다.

### useRef

-   [참고자료1]('https://www.daleseo.com/react-hooks-use-ref/')
-   1. 특정 DOM을 선택해야 할 때

    ```jsx
    const nameInput = useRef();

    const onClick = () => {
        nameInput.current.focus();
    }

    return(
        <input ref={nameInput} />
        <button onClick={onClick}>클릭</button>
    )
    ```

-   2. 컴포넌트 안의 변수를 만들어야 할 때

    -   대부분의 경우 상태가 변할 때 마다 화면이 갱신되고, 함수 내부의 변수들이 초기화 된다.(state말고.)

    ```jsx
    import React, { useState, useEffect } from "react";

    function ManualCounter() {
        const [count, setCount] = useState(0);

        let intervalId;

        const startCounter = () => {
            // 💥 매번 새로운 값 할당
            intervalId = setInterval(
                () => setCount((count) => count + 1),
                1000
            );
        };
        const stopCounter = () => {
            clearInterval(intervalId);
        };

        return (
            <>
                <p>자동 카운트: {count}</p>
                <button onClick={startCounter}>시작</button>
                <button onClick={stopCounter}>정지</button>
            </>
        );
    }
    ```

    -   intervalId 변수가 startCounter()와 stopCounter()에서 공유해야하는데,  
        count가 바뀔때마다 re-rendering되며 intervalId가 계속 새롭게 쌓임
    -   useRef를 사용한 해결법

    ```jsx
    import React, { useState, useRef } from "react";

    function ManualCounter() {
        const [count, setCount] = useState(0);
        const intervalId = useRef(null);
        console.log(`랜더링... count: ${count}`);

        const startCounter = () => {
            intervalId.current = setInterval(
                () => setCount((count) => count + 1),
                1000
            );
            console.log(`시작... intervalId: ${intervalId.current}`);
        };

        const stopCounter = () => {
            clearInterval(intervalId.current);
            console.log(`정지... intervalId: ${intervalId.current}`);
        };

        return (
            <>
                <p>자동 카운트: {count}</p>
                <button onClick={startCounter}>시작</button>
                <button onClick={stopCounter}>정지</button>
            </>
        );
    }
    ```

## React 에러 바운더리

-   [참고자료1]('https://nukw0n-dev.tistory.com/24')
-   react에서 예외 발생시 예외를 발생한 컴포넌트만 언마운트 되는게 아니다.
-   예외 발생시 모든 컴포넌트가 언마운트 된다.
-   <b>이는 잘못된 정보를 사용자에게 보여주는것보다 아무것도 보여주지 않는게 낫기 때문이다.</b>
-   <b>Error Boundary는 하위 컴포넌트에서 발생한 예외를 catch(try-catch 와는 다름)하여 Fallback UI를 보여주는 등의 처리를 해주는 컴포넌트</b>
-   hook에서는 아직 위의 라이프사이클에 대한 핸들링을 지원하지 않는다.
-   componentDidCatch, getDerivedStateFromError 라이프 사이클 함수를 사용한다.

    ```jsx
    import React from "react";
    import Fallback from "./Fallback";
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }
        static getDerivedStateFromError(error) {
            // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
            return { hasError: true };
        }
        componentDidCatch(error, errorInfo) {
            // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
            console.log(error, errorInfo);
        }
        render() {
            if (this.state.hasError) {
                // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
                return <Fallback />;
            }
            return this.props.children;
        }
    }
    export default ErrorBoundary;
    ```

    ```jsx
    //위에서 만든 컴포넌트를 아래와 같은 구조로 사용한다.
    <ErrorBoundary>
        <SomeComponent />
    </ErrorBoundary>
    ```

## redux / context api

-   [참고자료1]('https://devlog-h.tistory.com/26'), [참고자료2]('https://velog.io/@cada/React-Redux-vs-Context-API')
-

## redux saga

-   비동기로 api 호출할때 사용
