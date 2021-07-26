import React from "react";

export default function () {
  const str = "hello world";
  return (
    //주석입니다. div tag가 createElement를 하고 있음.  아래 //는 문자로 인식
    <div>
      // ....
      <h2>App01</h2>
      <p>JSX Tutorial - 특징1 : HTML과의 차이점 </p>
      {/* 1. 속성은 Camel Case */}
      <input type="text" maxLength="10" />
      {/* 2. Element는 꼭 닫혀야 한다. 
        오류) <br><hr><input type="text"><img src="">*/}
      <br />
      <hr />
      <img
        width="100px"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      />
      {/* 3. 속성 이름은 DOM API 기반이다.
            <div id="box" class="box"></div> 
            document.getElementById("box").className='box'*/}
      <div id="box" className="box">
        box 입니다.
      </div>
    </div>
  );
}
// html x createEelment로 생성하는 거임
//  createElement('h2'//tagname , null, null//)
/*
Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _default;
  
  function _default() {
    return React.createElement("div", null, 
    React.createElement("h2", null, "App01"), 
    React.createElement("p", null, "JSX Tutorial - \uD2B9\uC9D51 : HTML\uACFC\uC758 \uCC28\uC774\uC810 ")
    );

*/
