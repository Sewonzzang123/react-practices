import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    super(...arguments);
    this.state = { color: null };
    console.log("[MOUNT01]");
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

  render() {
    // this.setState({color:this.props.color}); render를 호출하기 때문에 무한루프
    console.log(`[MOUNT03][UPDATE03]: render()`);
    return (
      <h3
        style={{ width: 300, height: 50, backgroundColor: this.state.color }}
      ></h3>
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
}
