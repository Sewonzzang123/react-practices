## ex05: React(API 기반) 애플리케이션으로 리팩토링

1. 간단한 webpack loader 작성하고 설정해보기(src/text-loader.js)

2. 프로젝트 생성

```bash
[../basic] $ mkdir ex05
[../basic] $ cd ex05
[../basic/ex05] $ npm init -y
[../basic/ex05] $ npm  -D webpack webpack-cli webpack-dev-server react react-dom
```

3. 프로젝트 디렉토리

<pre>
    /ex05
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- bundle.js [빌드결과물]
      |--- /src
      |         |--- index.js
      |         |--- App.js
      |--- dev-server.mjs
      |--- webpack.config.js
</pre>

4. webpback.config.js

```javascript
const path = require("path");

module.exports = {
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: path.resolve("src/text-loader"),
      },
    ],
  },
  devServer: {
    contentBase: path.resolve("public"),
    host: "0.0.0.0",
    port: 9999,
    inline: true,
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
};
```

1. 빌드(번들링)

bash

```bash
[../basic/ex05] $ npx webpack
```

5. 테스트 서버 실행

```bash
[../basic/ex05] $ npx webpack serve --progress
```
