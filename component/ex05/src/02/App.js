import React, { Fragment, useState } from "react";
import Hook from "./Hook";

export default function App() {
  const [color, setColor] = useState("#000");

  return (
    <Fragment>
      <h2>
        ex05: Component Life Cycle - Function Component LifeCycle : Hook 함수
      </h2>
      <button
        onClick={() =>
          setColor(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`)
        }
      >
        색상 변경
      </button>
      <br />
      <Hook color={color} />
    </Fragment>
  );
}
