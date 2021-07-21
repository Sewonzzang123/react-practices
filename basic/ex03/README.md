## ex03: 애플리케이션 분리2: ES6 모듈 시스템

1. 프로젝트 생성

```bash
[../basic] $ mkdir ex03
[../basic] $ cd ex03
[../basic/ex03] $ npm init -y
[../basic/ex03] $ npm i -D express

```

2. 프로젝트 디렉토리

<pre>
    /ex03
      |--- package.json
      |--- package-lock.json
      |--- /node_modules
      |--- /public
      |         |--- index.html
      |         |--- index.js
      |         |--- App.js
      |--- dev-server.js
</pre>

3. scripts

```javascript
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module",
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

[App.js]

```javascript

```

[index.js]

```javascript

```

5. 테스트(테스트 서버 실행)

```bash
[../basic/ex03] $ npm start
```

6. 결론
