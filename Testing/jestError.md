# Reflect.hasOwnMetadata is not a function error

## typescript를 이용해 jest 테스트 중 reflect 관련 오류가 발생했다.

1. reflect-metadata 설치

```
yarn add reflect-metadata --dev
```

2. jest.setup.ts 생성 및 설정

```
import 'reflect-metadata';
```

3. jest.config.js 설정 추가

```
// A list of paths to modules that run some code to configure or set up the testing framework before each test
setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
```
