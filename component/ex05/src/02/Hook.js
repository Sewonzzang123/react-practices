import React, { Fragment, useRef, useState, useEffect } from "react";

export default function Hook({ color }) {
  //useState(color) : 초기화 함수, 바꿀때는 setBoxColor .. setBoxColor를 사용하지 않으니까 처음에 받은 #000만 나오게 됨
  const [boxColor, setBoxColor] = useState(null);
  const [title, setTitle] = useState("");
  const h3Ref = useRef(null);

  // Alternative 1 : getDerivedStateFromProps
  if (boxColor !== color) {
    setBoxColor(color);
  }

  // After Rendering 함수 ( 상태에 변화 -> 렌더링 -> 함수)
  // class component lifeCycle(componentDidMount, componentDidUpdate)
  useEffect(() => {
    console.log(`After Rendering`);
  });

  // 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수 ( 어떤 특정 상태값이 변화 -> 렌더링 -> 함수 )
  // 관심 분리
  useEffect(() => {
    console.log(`Update Color(DB) Using APIs..`);
  }, [boxColor]);

  /**
   * Alternative 2 : componentDidMount & componentWillUnmount
   */
  useEffect(() => {
    console.log(`After Mount(ComoponentDidMount)`);
    return function () {
      console.log(`After Unmount(ComoponentWillUnmount)`);
    };
  }, []);

  return (
    <Fragment>
      <h3
        style={{ width: 300, height: 50, backgroundColor: boxColor }}
        ref={h3Ref}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </Fragment>
  );
}
