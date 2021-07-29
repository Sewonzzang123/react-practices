## webpack-practices : ex06

image file

프로젝트 생성

```bash
[..\basic\webpack-practices\ex03] $ npm init -y
[..\basic\webpack-practices\ex03] $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass file-loader
```

프로젝트 구조

<pre>
    /ex05
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- /assets
      |         |       |--- /images
      |         |               |--- logo.svg [build 결과]
      |         |--- bundle.js [build 결과]
      |--- /src
      |         |--- index.js
      |         |--- index.css
      |         |--- logo.svg
      |         |--- App.js
      |         |--- App.scss
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
    assetModuleFilename: "assets/images/[hash][ext]", //중요
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico|tiff?|bmp)$/i,
        type: "assets/resource",
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve("public"),
    watchContentBase: true,
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
