import React, { Fragment, useState } from "react";

export default function App() {
  const [color, serColor] = useState("#000");

  const handleClick = function () {
    setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);
  };

  return (
    <Fragment>
      <h2>ex05: Component Life Cycle</h2>
      <button onClick={handleClick}>색상 변경</button>
      <br />
      {/** 
      <LifeCycle color={color} />
      */}
    </Fragment>
  );
}
