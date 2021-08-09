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
    "build": "",
    "dev:backend": "cross-env NODE_ENV=development nodemon backend/index.js -e js,mjs,json,env --watch backend --name $npm_package_name"
  },
```

1. nodemon
2. webpack dev server
3. package.json
4. node application

### Application

1. App01. Emaillist
   - 개발 통합 설정 (with Node Backend)
   - backend : Fully APIs(Node Express 기반)
   - FrontEnd : React(SPA)
   - AJAX : fetch 기반
2. App02. Kanban
3. App03. Guestbook(node + react)
4. App04. Gallery(node + react)
5. mysite(App02 + App03)

---
