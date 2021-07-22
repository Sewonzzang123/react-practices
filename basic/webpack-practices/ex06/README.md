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

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/i,
        loader: "file-loader",
        options: {
          outputPath: "/assets/images",
          name: "[name].[ext]",
        },
      },

```

빌드

```bash
[..\basic\webpack-practices\ex03] $ npx webpack
```

실행

```bash
[..\basic\webpack-practices\ex03] $ npx webpack serve --progress
```
