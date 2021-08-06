import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    super(...arguments);
    this.h3Ref = null; //DOM에 접근
    this.state = { color: null };
    console.log("[MOUNT01] : constructor");
  }
  // props로 받아온 값을 state에 동기화 한다.
  static getDerivedStateFromProps(nextProps, preState) {
    console.log(
      `[MOUNT02][UPDATE01]: getDerivedStateFromProps(${nextProps.color},${preState.color})`
    );
    return nextProps.color !== preState.color
      ? { color: nextProps.color }
      : null;
  }
  /**
   * shouldComponentUpdate
   * state이 변경 되었을 때, re-rendering 여부를 결정한다.
   * 현재 데이터: this.props, this.state
   * 변경 데이터: nextProps, nextState
   * 로 접근이 가능하다.
   *
   * 컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
   * return true: render, false: render X
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE02] : shouldComponentUpdate (${nextProps.color},${nextState.color})`
    );
    return true;
  }

  render() {
    // this.setState({color:this.props.color}); render를 호출하기 때문에 무한루프
    console.log(`[MOUNT03][UPDATE03]: render()`);
    return (
      <h3
        style={{ width: 300, height: 50, backgroundColor: this.state.color }}
        ref={(ref) => (this.h3Ref = ref)}
      />
    );
  }

  /**
   * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후
   * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는 이벤트
   * 1. 이벤트 등록
   * 2. 타이머 설정
   * 3. 네트워크 통신
   * 등을 할 수 있다.
   */
  componentDidMount() {
    console.log(`[MOUNT04]: componentDidMount()`);
  }
  /**
   * 컴포넌트를 DOM에서 제거 할 때
   * comoponentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리먼트 등을 제거(Clean-Up)
   *
   */
  componentWillUnmount() {}

  /**
   * getSnapshotBeforeUpdate
   * render 메소드 호출 직후, DOM의 변화를 반영하기 직전에 호출[v16.3]
   * 반환값은 다음 메소드 componentDidUpdate()의 세번째 파라미터로 전달된다.
   * 변경 전의 props, state 접근이 가능하다.
   * 주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 오버라이딩을 한다.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `[UPDATE04]: getSnapshotBeforeUpdate(${prevProps.color}, ${prevState.color})`
    );
    return prevProps.color !== this.state.color
      ? this.h3Ref.style.backgroundColor
      : null;
  }

  /**
   * componentDidUpdate
   * DOM 업데이트가 끝난 직후, DOM 작업이 가능하다.
   * 변경 전의 props, state 접근이 가능하다.
   *
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // rgb(10,20,30)=>#....
    // '10,20,30'=>[10,20,30]=>reduce('#'->'#0a'=>'#0af5'=>'#0xf5ee')
    // const nexColor = s
    console.log(
      `[UPDATE05]: componentDidUpdate(${prevProps.color}, ${prevState.color}, sanpshot : ${snapshot})`
    );
  }
}
