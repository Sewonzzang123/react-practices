## webpack-practices : ex01

basic ex04 를 webpack

프로젝트 생성

```bash
[..\basic\webpack-practices\ex01] $ npm init -y
[..\basic\webpack-practices\ex01] $ npm i -D webpack webpack-cli express
```

빌드하기

```bash
[..\basic\webpack-practices\ex01] $ npx webpack ./src/index.js
```

./dist/main.js 로 번들링 됨

```bash
[..\basic\webpack-practices\ex01] $ npx webpack ./src/index.js -o ./public
```

./public/main.js 로 번들링 됨

테스트 서버 실행

```bash
[..\basic\webpack-practices\ex01] $ node dev-server.mjs
```

ES6 모듈로 실행(1. package.json 2. 확장자명 mjs) 해야 함.

디렉토리

<pre>
    /ex01
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- main.js
      |--- /src
      |         |--- index.js
      |         |--- App.js
      |--- dev-server.mjs
</pre>

package.json

```json
  "scripts": {
    "start":"node dev-server.mjs",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"npx webpack ./src/index.js -o ./public"
  },
```
