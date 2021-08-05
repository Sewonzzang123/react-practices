## ex05

## Class Component LifeCycle

1. Mount LifeCycle (최초의 컴포넌트가 생성되는 시기)
   - constructor
   - getDrivedStateFromProps : props로 받아온 값을 state에 동기화 한다.[react V16.3]
   - componentDidMount : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후 (이벤트 등록, 타이머 설정, 네트워크 통신 등 )
2. Update LifeCycle (DOM이 업데이트 되는순간)
   - getDrivedStateFromProps
3. Unmount LifeCycle
4. src/01

## Function Component LifeCycle

1. 대체(Alternative) (class Component)
