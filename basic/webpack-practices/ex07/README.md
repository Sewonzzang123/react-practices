## webpack-practices : ex07

간단한 webpack loader 작성하고 설정해보기 ()

프로젝트 생성

```bash
[..\basic\webpack-practices\ex03] $ npm init -y
[..\basic\webpack-practices\ex03] $ npm i -D webpack webpack-cli webpack-dev-server
```

프로젝트 구조

<pre>
    /ex07
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- bundle.js [build 결과]
      |--- /src
      |         |--- index.js
      |         |--- hello.txt
      |         |--- App.js
      |         |--- text-loader.js
      |--- dev-server.mjs
      |--- webpack.config.js
</pre>

webpack.config.js

```javascript
 module: {
    rules: [
      {
        test: /\.txt$/i,
        loader: path.resolve("src/text-loader.js"),
      },
    ],
  },
```

text-loader.js

```javascript
module.exports = function (source) {
  console.log("text-loader preprocessing ...");
  return `module.exports={ text: '${source}' }`;
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
