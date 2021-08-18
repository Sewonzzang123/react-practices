import React from "react";

export default function Header() {
  return (
    <div className="links">
      <div className="linkTop">
        <a href="#" onClick={(e) => e.preventDefault()}>
          비회원으로 시작하기
        </a>
      </div>
      <div className="linkBottom">
        <a href="#" onClick={(e) => e.preventDefault()}>
          아이디 찾기
        </a>{" "}
        |{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          비밀번호 찾기
        </a>{" "}
        |{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          회원가입 하기
        </a>
      </div>
    </div>
  );
}
