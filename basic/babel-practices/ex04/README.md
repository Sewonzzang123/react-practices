## Env Preset

1. 관련 플러그인들을 모아 놓고 한 번에 적용하기 위해서 미리 플러그인들을 모아 놓은 것
2. ECMAScript 년도별로 모아 놓은 것들, stage(0,1,2,3) 레벨별로 모아 놓은 프리셋, 3rd party 프리셋 등 종류가 다양하다.
3. Env Preset은 stage 3 레벨 이상 문법의 플러그인들을 설치한다.(babel.config.json)

## 설치

1. 설치

```bash
npm i -D @babel/core @babel/cli @babel/preset-env
```

2.  플러그인 항목을 확인

```bash
$ npm list --depths=1 | grep "@babel/plugin"
```

## 설정 및 변환 작업

1. 기본 설정[babel.config.01.json]

- 설정

  ```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": { "node": "current" }
        }
      ]
    ]
  }
  ```

- 변환
  ```bash
  $ npx babel src/ex01.js -o dist/ex01.01.js
  ```

2. 플러그인 설정[babel.config.02.json]

- 설정

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": { "node": "current" }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-transform-for-of"
  ]
}
```

- 변환

  ```bash
  $ npx babel src/ex01.js -o dist/ex01.02.js
  ```

1. 브라우저 타겟 설정[babel.config.json]
   [브라우저 별 ES6호환 테이블] 참고해서 설정 <a href ="http://kangax.github.io/compat-table/es6/">babel/plugin 참고1</a>
   <a href="https://babeljs.io/docs/en/plugins-list#docsNav">babel/plugin 참고2</a>

- 설정

  ```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "edge": "89",
            "firefox": "92",
            "chrome": "90",
            "opera": "76",
            "safari": "15"
          }
        }
      ]
    ]
  }
  ```

- 변환

  ```bash
  $ npx babel src/ex01.js -o dist/ex01.02.js
  ```
