# 자주쓰는 타입변환

## object key to union

```typescript
const myObject = {
    key1: "value1",
    key2: "value1",
};
type MY_OBJECT_KEYS = keyof typeof myObject; // "key1" | "key2"
```

## [array to union](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

```typescript
//TypeScript 3.4부터 as const를 통해 type assertion 가능
const pathType = ["FILE", "URL"] as const;
type PATH_TYPES = typeof pathType; //  "FILE" | "URL"
```
