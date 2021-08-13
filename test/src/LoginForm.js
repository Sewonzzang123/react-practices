import React from "react";

export default function InputForm() {
  return (
    <div className="login_form">
      <h2>로그인</h2>
      <p className="info_text">
        WEHAGO에서 제공하는 다양한 서비스로 더 스마트해진 업무환경을 경험하세요.
      </p>
      <div className="input_field">
        <div>
          <input
            type="text"
            className="input_id"
            placeholder="아이디를 입력하세요."
          />
        </div>
        <p className="wrong"></p>
      </div>
      <div className="password_field">
        <div>
          <input
            type="text"
            className="input_password"
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <p className="wrong"></p>
      </div>
      <button className="login_button" tabIndex="0">
        <span>로그인</span>
      </button>
      <div className="login_info">
        <ul>
          <li>
            <a href="#">아이디 찾기</a>
          </li>

          <li>
            <a href="#">비밀번호 찾기</a>
          </li>
        </ul>
        <a href="#" className="member_join">
          회원가입
        </a>
      </div>
    </div>
  );
}
