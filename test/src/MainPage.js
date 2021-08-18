import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function MainPage() {
  return (
    <div className="initialView">
      <div className="content-wrapper">
        <div className="content">
          <div className="logo-wrapper">
            <div className="logo">
              <a href="#">
                <img src="./assets/image/wehago.svg" height="24" alt="MEHAGO" />
              </a>
            </div>
          </div>
          <div className="login-form">
            <div className="message">
              <h1>로그인</h1>
              <div className="message-info">
                <span>로그인을 통해 mehago를 이용해 보세요.</span>
              </div>
            </div>
            <form>
              <div className="id">
                <TextField
                  id="outlined-basic"
                  className="id-input"
                  label="아이디"
                  variant="outlined"
                  size="medium"
                />
              </div>
              <div className="password">
                <TextField
                  id="outlined-basic"
                  className="password-input"
                  type="password"
                  label="패스워드"
                  variant="outlined"
                  size="medium"
                />
              </div>

              <div className="login-button">
                <Button
                  className="login-btn"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  로그인
                </Button>
              </div>
            </form>
          </div>
          <div className="non-members">
            <span>
              <a href="#">비회원으로 시작하기</a>
            </span>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">아이디 찾기</a>
              </li>

              <li>
                <a href="#"> 비밀번호 찾기</a>
              </li>
            </ul>
            <a href="#" className="member_join">
              회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}