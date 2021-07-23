## ex07: CRA로 만든 Application 직접 설정해서 만들어 보기

1. 프로젝트 생성

```bash
[../basic] $ mkdir ex07
[../basic] $ cd ex07
[../basic/ex07] $ npm init -y
[../basic/ex07] $ npm  -D webpack webpack-cli webpack-dev-server react react-dom
[../basic/ex07] $ @babel/core @babel/preset-env @babel/preset-react babel-loader (ES6 -> ES5)

```

2. 프로젝트 디렉토리

<pre>
    /ex07
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- bundle.js [빌드결과물]
      |--- /src
      |         |--- index.js
      |         |--- App.js
      |--- babel.config.json
      |--- dev-server.mjs
      |--- webpack.config.js
</pre>

3. webpback.config.js

```javascript
module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
```

4. babel.config.json

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "ie": "11",
          "edge": "80",
          "firefox": "73",
          "chrome": "82",
          "opera": "69",
          "safari": "13"
        }
      }
    ],
    "@babel/react"
  ]
}
```

5. 빌드(번들링)

bash

```bash
[../basic/ex07] $ npx webpack
```

6. 테스트 서버 실행

```bash
[../basic/ex07] $ npx webpack serve --progress
```

App.js

```javascript
import React from "react";

const App = function () {
  const message = "hello world";
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
```
