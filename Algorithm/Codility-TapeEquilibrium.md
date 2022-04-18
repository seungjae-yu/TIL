# TapeEquilibrium

```javascript
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sum = A.reduce((prev, cur) => {
        prev += cur;
        return prev;
    }, 0);

    const ret = A.reduce(
        (prev, cur, idx) => {
            if (idx + 1 === A.length) return prev;
            prev[0] += cur;
            prev[1] = Math.min(prev[1], Math.abs(sum - prev[0] * 2));
            return prev;
        },
        [0, Number.MAX_SAFE_INTEGER]
    );
    return ret[1];
}
```
