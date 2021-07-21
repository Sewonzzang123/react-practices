## ex01: 전통적인 DOM API 기반의 애플리케이션

1. 프로젝트 생성

```bash
[../basic] $ mkdir ex01
[../basic] $ cd ex01
[../basic/ex01] $ npm init -y
[../basic/ex01] $ npm i -D express

```

2. 프로젝트 디렉토리

<pre>
    /ex01
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- index.js
      |--- dev-server.js
</pre>

3. scripts

```javascript
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module", //es6 system을 사용한다. (require을 사용하면 안돼)
  "main": "index.js",
  "scripts": {
    "start": "node dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}
```

4. 애플리케이션 작성

   [index.js]

   ```javascript
   const App = function () {
     const app = document.createElement("h1");
     app.textContent = "hello world";
     return app;
   };

   document.getElementById("root").appendChild(App());
   ```

5. 테스트(테스트 서버 실행)

```bash
[../basic/ex01] $ npm start
```

6. 결론

- DOM API를 직접 자바스크립트 코드로 추출
- 주로 DOM 조작에 특화된 jQuery와 같은 라이브러리를 활용한다.
- 장점은 작성된 애플리케이션 코드의 전달이 쉽다.( 작성된대로 js파일을 html에 링크)

#### import from

a.

```javascript
export default function () {}
```

b.js

```javascript
exprot const a = 10;
export const b = function(){}
```

```javascript
import f from "a";
// {a:a,b:b} 로 넘어옴 > 객체 분해를 해야 해
import { a, b } from "b";
```
