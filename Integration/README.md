## React Practices - Integration(개발 환경 통합)

### Configuration

1. Application Structure

  <pre>
    /app
    |--- /backend
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /public
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- [index.js]
    |       |--- [app.config.env]
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
  </pre>

package.json : stop 은 window에서는 x

```json
  "scripts": {
    "start": "cross-env NODE_ENV=development node backend/index.js -e js,mjs,json,env --watch backend --name $npm_package_name",
    "restart": "npm stop && npm start",
    "stop": "pkill -9 $npm_package_name",
    "postinstall": "npm run build",
    "test": "echo 'not yet'",
    "build": "npm run build:frontend",
    "build:backend": "",
    "build:frontend": "cross-env NODE_ENV=production webpack --config frontend/config/webpack.config.js --mode production --progress",
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\" --kill-others",
    "dev:backend": "cross-env NODE_ENV=development nodemon backend/index.js -e js,mjs,json,env --watch backend --name $npm_package_name",
    "dev:frontend": "cross-env NODE_ENV=development webpack serve --config frontend/config/webpack.config.js --mode development --progress"
  },
```

webpack.config.js

```json
 proxy: {
      "/api": "http://localhost:8888",
    },
```

await 가 버전이 높아서 error 가 생김 > polyfil로 async await=>callback으로 바꿔주기

```bash
 npm i -D @babel/plugin-transform-runtime
```

2. nodemon
3. webpack dev server
4. package.json
5. node application
6. concurrently : dev:frontend, dev:backend 를 동시에 실행시키려고 설치 (npm i -D concurrently)

### Application

1. App01. Emaillist
   - 개발 통합 설정 (with Node Backend)
   - backend : Fully APIs(Node Express 기반)
   - FrontEnd : React(SPA)
   - AJAX : fetch 기반
2. App02. Kanban
   - 개발 통합 설정 (with Node Backend)
   - backend : Fully APIs(Node Express 기반)
   - FrontEnd : React(SPA)
   - AJAX : fetch 기반
3. App03. Guestbook(node + react)
4. App04. Gallery(node + react)
5. mysite(App02 + App03)

---
