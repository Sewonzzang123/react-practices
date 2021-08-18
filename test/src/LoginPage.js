import React, { useState } from "react";
import Links from "./login/Links";
import NonMembers from "./login/NonMembers";
import LoginForm from "./login/LoginForm";
import styles from "./assets/scss/LoginPage.scss";
import update from "react-addons-update";

export default function LoginPage() {
  const [memberVo, setMemberVo] = useState({ id: "", password: "" });
  const login = () => console.log(memberVo);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setMemberVo(update(memberVo, { [name]: { $set: value } }));
    console.log(memberVo);
  };

  return (
    <div className={styles.MainPageWrapper}>
      <div className={styles.InitialView}>
        <div className={styles.ContentWrapper}>
          <div className={styles.Content}>
            <div className={styles.LogoWrapper}>
              <div className={styles.Logo}>
                <a href="#">
                  <img
                    src="./assets/image/wehago.svg"
                    height="24"
                    alt="MEHAGO"
                  />
                </a>
              </div>
            </div>
            <LoginForm handleChange={handleChange} />
            <NonMembers />
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
