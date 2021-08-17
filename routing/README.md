## React Routing

### ex01 : React Router Basic I : HashRouter Component

exact

### ex02 : React Router Basic II : Link VS NavLink Component

ul과 같은 부분들은 include 대신 composition을 사용(ex04)

### ex03 : Style & Semantic Markup

### ex04 : Compositiion(합성)

```javascript
<Fragment>
  <Header />
  <div id="content" className={styles.Main}>
    <h2>Main</h2>
  </div>
  <Navigation />
  <Footer />
</Fragment>
```

content를 제외한 나머지 부분들을 layout component를 만들어서 사용하기

```javascript
<Layout>
    <div>....</div>
<Layout>
```

### ex05 : Nesting Route(경로 내포)

### 설치

```bash
$ npm i react-router-dom
```

### 실행

```bash
$ npm run debug src=ex01...
```
