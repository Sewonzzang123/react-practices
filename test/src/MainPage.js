import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";

export default function Header() {
  return (
    <div className="data-react">
      <div className="wrap login_wrap">
        <Header />
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
