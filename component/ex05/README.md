## ex05 : Component Lifecycle + AJAX(fetch, axios)

## Class Component LifeCycle

디테일하게 설정하려면 class component를 사용해라 (function component에서는 불가능)

1. Mount LifeCycle (최초의 컴포넌트가 생성되는 시기)
   - constructor
   - getDrivedStateFromProps : props로 받아온 값을 state에 동기화 한다.[react v16.3]
   - render
   - componentDidMount : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후 (이벤트 등록, 타이머 설정, 네트워크 통신 등 )
2. Update LifeCycle (DOM이 업데이트 되는순간)
   - getDrivedStateFromProps
   - shouldComponentUpdate : state이 변경 되었을 때, 렌더링 여부를 결정한다.
   - render
   - getSnapshotBeforeUpdate : render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3](update되기 전의 상태를 가지고 있다.)
   - componentDidUpdate : DOM 업데이트가 끝난 직후, DOM 작업이 가능하다.
3. Unmount LifeCycle
   - componentWillUnmount : 컴포넌트가 DOM에서 사라질 때
4. src/01

## Function Component LifeCycle : Hook 함수

대체(Alternative) (class Component)

1. Alternative 1 : getDerivedStateFromProps
2. After Rendering 함수 ( 상태에 변화 -> 렌더링 -> 함수 )
3. 어떤 특정 값의 변화에 반응하는 After Rendering 함수 ( 어떤 특정 상태값이 변화 -> 렌더링 -> 함수 )
4. Alternative 2 : componentDidMount
5. Alternative 3 : componentDidUpdate
6. Alternative 4 : componentWillUnmount
