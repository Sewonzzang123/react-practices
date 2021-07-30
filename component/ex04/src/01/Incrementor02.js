import React, { useState } from "react";

export default function Incrementor02({ begin, step }) {
  const [stateValue, setValue] = useState(begin);
  const onClickButton = function () {
    setValue(stateValue + step);
  };

  return (
    <div>
      <button onClick={onClickButton}>
        <strong>+</strong>
      </button>{" "}
      <span>{stateValue}</span>
    </div>
  );
}
