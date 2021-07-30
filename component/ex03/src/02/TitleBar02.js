import React, { useState } from "react";

export default function TitelBar02() {
  //   const no = 10;

  const onClickHeader = (e) => {
    console.log("titlebar02 click");
  };
  return (
    <h1
      onClick={onClickHeader}
      style={{
        cursor: "pointer",
      }}
    >
      ex03-Functional Handler (Functional Component) {/*no*/}
    </h1>
  );
}
