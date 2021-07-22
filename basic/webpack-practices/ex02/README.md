## webpack-practices : ex02

프로젝트 생성

```bash
[..\basic\webpack-practices\ex02] $ npm init -y
[..\basic\webpack-practices\ex02] $ npm i -D webpack webpack-cli express
```

디렉토리

<pre>
    /ex02
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- bundle.js
      |--- /src
      |         |--- index.js
      |         |--- App.js
      |--- dev-server.mjs
      |--- webpack.config.js
</pre>

webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
};
```

빌드

```bash
[..\basic\webpack-practices\ex02] $ npx webpack
```

webpack.config.js의 output 섹션에 지정된 public/bundle.js 로 번들링 됨.

실행

```bash
[..\basic\webpack-practices\ex02] $ node dev-server.mjs
```

package.json

```json
  "scripts": {
    "start": "node dev-server.mjs",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  },
```
