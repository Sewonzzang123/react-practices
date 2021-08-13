import React from "react";
import LoginForm from "./LoginForm";

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
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <div className="login_fail"></div>
    </div>
  );
}
