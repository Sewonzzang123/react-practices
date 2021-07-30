import React from "react";

export default function () {
  // 자바코드 ㄴㄴ 함수가 들어가야 해
  return (
    <h1
      onClick={() => {
        console.log("click");
      }}
      style={{
        cursor: "pointer",
      }}
    >
      ex03-Inline Handler
    </h1>
  );
}
