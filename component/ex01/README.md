## Component - Property : Component 작성 (Date Flow: Top - Down)

### 01. props(property)?

1. 컴포넌트 정보(Component data)
2. 부모 컴포넌트에서 자식으로 전달
   - Component Communication(컴포넌트간의 통신), Data Flow
   - Top-Down Direction
3. 자식은 읽기만 함 => 프로퍼티는 변경 불가
4. 부모가 소유하게 된다.

### 02. FoodList src/01 : Class Component

### 03. FoodList src/02 : Data Flow with Class Component

### 04. FoodList src/03 : Data Flow with Function Component

### 05. src/04 : Property Validation(Design할 때)

```bash
$ npm i -D prop-types
```

### Run Examples

```bash
[../component/ex01] $ npm run debug src={no}
```

npx webpack serve --progress --mode development --env src=01
