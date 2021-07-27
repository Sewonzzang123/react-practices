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
    // XSS 보호기능을 끄고 html을 렌더링하는 속성(property,props)을 제공한다.
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}
