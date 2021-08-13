import React from "react";

export default function Header() {
  return (
    <div className="data-react">
      <div className="wrap login_wrap">
        <div className="header">
          <div className="respond_container">
            <div className="nav_header">
              <button type="button" className="btn_toggle"></button>
              <div className="logo">
                <a href="#">
                  <img
                    src="./assets/image/wehago.svg"
                    height="24"
                    alt="MEHAGO"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contnt">
            <div className="content_box login_process">
              <div className="login_form">
                <h2>로그인</h2>
                <p className="info_text">
                  WEHAGO에서 제공하는 다양한 서비스로 더 스마트해진 업무환경을
                  경험하세요.
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
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <div className="login_fail"></div>
    </div>
  );
}
