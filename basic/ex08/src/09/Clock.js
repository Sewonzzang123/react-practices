import React, { Component, Fragment } from "react";

export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    /**
     * comment 01 : 컴포넌트 안이 아니기 때문에 자바스크립트 구분이 가능하다.
     */
    <div
      /* comment 02 : 여기서도 다중행 주석이 가능하다( 추천안함 ) */
      className="clock"
      titie="시계"
      props01="hello"
      props02="world"
    >
      {/* cf) JSX는 HTML이 아니야!! 이런 <!-- --> 주석은 사용할 수 없다. */}
      // comment 03 : JSX 컴포넌트 렌더링 안에서 주석을 사용하면 화면에 그대로
      나온다.
      {("0" + (hour > 12 ? hour - 12 : hour)).slice(-2)}
      {" : "}
      {("0" + minute).slice(-2)}
      {" : "}
      {("0" + second).slice(-2)}
      {"  "} {hour > 12 ? "PM" : "AM"}
    </div>
  );
}
