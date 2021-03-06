import React, { Fragment, useRef } from "react";
import logo from "../assets/images/react-logo.png";

export default function App() {
  const imageRef = useRef(null); //여기서는 알수 없어서 null줌, 밑에서 지정해줄것이다.

  const onKeyPressInput = function (e) {
    if (e.key == "Enter") {
      console.log(e.target.value);
      // 화면을 바꾸려면 state를 사용해라
    }
  };
  const onFocusInput = function (e) {
    console.log("onFocusInput");
  };
  const onBlurInput = function (e) {
    console.log("onBlurInput");
  };

  const onMouseOverImage = function (e) {
    console.log("onMouseOverImage");
  };
  const onMouseMoveImage = function (e) {
    // $('img').top ...
    // document.getElementById('image').offsetTop
    const offsetTop = imageRef.current.offsetTop;
    const offsetLeft = imageRef.current.offsetLeft;

    console.log(
      "onMouseMoveImage",
      `x=${e.clientX - offsetLeft},y=${e.clientY - offsetTop}`
    );
  };
  const onMouseOutImage = function (e) {
    console.log("onMouseOutImage");
  };
  const onMouseDownImage = function (e) {
    console.log("onMouseDownImage");
  };
  const onMouseUpImage = function (e) {
    console.log("onMouseUpImage");
  };
  const onClickImage = function (e) {
    console.log("onClickImage");
  };
  const onDoubleClickImage = function (e) {
    console.log("onDoubleClickImage");
  };

  return (
    <Fragment>
      <h2>ex03 - Some Examples of Event Handler</h2>
      <input
        type="text"
        placeholder="메세지를 입력 하세요"
        onKeyPress={onKeyPressInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      <br />
      <br />
      <img
        ref={imageRef}
        style={{
          cursor: "pointer",
          width: 190,
          border: "1px solid #ccc",
        }}
        src={logo}
        onMouseOver={onMouseOverImage}
        onMouseMove={onMouseMoveImage}
        onMouseOut={onMouseOutImage}
        onMouseDown={onMouseDownImage}
        onMouseUp={onMouseUpImage}
        onClick={onClickImage}
        onDoubleClick={onDoubleClickImage}
      />
    </Fragment>
  );
}
