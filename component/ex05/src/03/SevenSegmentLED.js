import React from "react";

export default function SevenSegmentLED({ number, colon }) {
  return (
    <div className="SevenSegmentLED">
      <div className="numbers">
        <p>11</p>
        <p className="placeholder"></p>
      </div>
      <div className="colon">
        {" "}
        {/**시간, 분에는 있어야함, 초는 없어야 해 colon true,false...*/}
        <p>:</p>
      </div>
    </div>
  );
}
