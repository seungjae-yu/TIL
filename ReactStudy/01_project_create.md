# 1장. 프로젝트 생성

## 1. typescript 설정으로 react-app을 만든다.

```
yarn create react-app news-keyword-notification --template typescript
cd news-keyword-notification
yarn
yarn start
```

## 2. 불필요한 코드를 지워준다.

### App.tsx

```tsx
import React from "react";

const App = () => {
  return <div>hello world</div>;
};

export default App;
```

### index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

```
yarn
yarn start
```

## 3. 실행결과 확인

![running_result](./01_result.png)

# 4. 폴더구조 참고

![folder_structure](./01_structure.png)

# 5. ignore 파일 설정

https://www.toptal.com/developers/gitignore 을 사용하여 만든다.  
.gitignore

```
# Created by https://www.toptal.com/developers/gitignore/api/react
# Edit at https://www.toptal.com/developers/gitignore?templates=react

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch

# End of https://www.toptal.com/developers/gitignore/api/react
```