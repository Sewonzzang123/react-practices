import React, { Component, Fragment } from "react";

export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const html =
    "<span>" +
    ("0" + (hour > 12 ? hour - 12 : hour)).slice(-2) +
    " : " +
    ("0" + minute).slice(-2) +
    " : " +
    ("0" + second).slice(-2) +
    "</span>";

  return (
    //html태그를 동적으로 생성하여 JSX에 추가하는 작업은 기본적으로 금지
    // (XSS 공격 방지)
    <div>{html}</div>
  );
}
