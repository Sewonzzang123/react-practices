import React, { Fragment, useRef, useState, useEffect } from "react";

export default function Hook({ color }) {
  //useState(color) : 초기화 함수, 바꿀때는 setBoxColor .. setBoxColor를 사용하지 않으니까 처음에 받은 #000만 나오게 됨
  const [boxColor, setBoxColor] = useState(color);
  const h3Ref = useRef(null);
  console.log(boxColor, color);
  return (
    <h3
      style={{ width: 300, height: 50, backgroundColor: boxColor }}
      ref={h3Ref}
    />
  );
}
