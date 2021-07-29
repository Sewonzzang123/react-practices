## ex02. Component - Component Styling

### 01. Inline Styling

src/01

### 02. Normal CSS (css-loader options{modules:false})

src/02 태그 선택자 ㅇㅇ, (클래스 선택자, 아이디 선택자) ㄴㄴ

```bash
[../component/ex02] $ npm run debug src=02 css-modules=false
```

### 03. Normal CSS (css-loader options{modules:true})

src/03

### 04. CSS Module (css-loader options{modules:true})

src/04
Banner01과 Banner02모두 Header라는 같은 클래스임.
모듈별로 사용했다. ( global ㄴㄴ)

### 05. CSS in JS

src/05

### 06. Styled Component

src/06

### 07. SASS & SCSS

src/07

### 08. LESS & Styleable

src/08

### Run Examples

```bash
[../component/ex02] $ npm run debug src={no} css-modules=false
```

npx webpack serve --progress --mode development --env src=01
src={no} css-modules=false : webpack.config.js 에서 path,css-loader를 넘겨
npm i --save node-sass
