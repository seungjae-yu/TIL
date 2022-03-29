# react-table remove arrow in subComponents

간단한 테이블 구현을 위해 react-table을 사용하는데  
subComponent를 사용하면 arrow(>)가 모든 column에 나타난다.  
subComponent가 존재하지 않더라도 버튼이 존재하는 문제가 있다.

Table의 getTrProps에 아래와 같이 넣어주고

## 1. ReactTable props 설정

### javascript

```javascript
getTrProps={(state, rowInfo, column) => {
    if (rowInfo === undefined) {
        return {}
    }
    return {
        'data-qnt' : condition ? "1" : "0";
    }
}}
```

### typescript

```typescript
getTrProps={(
    state: any,
    rowInfo?: RowInfo | undefined,
    column?: undefined
) => {
    if (rowInfo === undefined) return {};
    return {
        "data-qnt" : condition ? "1" : "0",
    };
}}
```

## 2. CSS 설정

```css
.rt-tr[data-qnt="0"] > .rt-expandable {
    visibility: hidden;
}
```

## 3. 결과

![react-tableInfo](./react-table.png)

입력한 condition을 만족하는 row만 subComponent를 열 수 있는 버튼이 생기고,  
조건을 만족하지 않는 row에는 버튼이 생기지 않는다.
