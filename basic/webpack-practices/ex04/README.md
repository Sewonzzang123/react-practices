## webpack-practices : ex04

<a href="https://velog.io/@adam2/webpack-dev-server-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%EC%82%BD%EC%A7%88%ED%9B%84%EA%B8%B0">참고하기</a>

프로젝트 생성

```bash
[..\basic\webpack-practices\ex03] $ npm init -y
[..\basic\webpack-practices\ex03] $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader
```

프로젝트 구조

<pre>
    /ex04
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |--- /src
      |         |--- /assets
      |         |       |--- /css
      |         |       |       |--- App.css
      |         |       |       |--- Common.css
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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

빌드

```bash
[..\basic\webpack-practices\ex03] $ npx webpack
```

실행

```bash
[..\basic\webpack-practices\ex03] $ npx webpack serve --progress
```
