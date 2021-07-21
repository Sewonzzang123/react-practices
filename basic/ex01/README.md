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

```json
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module", // es6 system을 사용한다 (require을 사용하면 안돼)
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

   ```

5. 테스트(테스트 서버 실행)

```bash
[../basic/ex01] $ npm start
```

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
