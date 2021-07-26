import React, { Component, Fragment } from "react";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

export default function () {
  return (
    <Fragment>
      <p>{`JSX Tutorial - JSX 표현식 표기법 {_expression_} 문제점 : if-statement`}</p>
      <Clock01 />
      <Clock02 />
    </Fragment>
  );
}