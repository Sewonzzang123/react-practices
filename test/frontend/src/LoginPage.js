import React, { useState } from "react";
import Links from "./login/Links";
import NonMembers from "./login/NonMembers";
import LoginForm from "./login/LoginForm";
import styles from "./assets/scss/LoginPage.scss";
import update from "react-addons-update";
import axios from "axios";

export default function LoginPage() {
  const [memberVo, setMemberVo] = useState({ id: "", password: "" });
  const [loginFail, setLoginFail] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(memberVo));
      // const response = await fetch(`/spring/account/api/login`, {
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "applcation/json",
      //   },
      //   body: JSON.stringify(memberVo),
      // });
      axios
        .post("/spring/account/api/login", memberVo, { headers: {} })
        .then((res) => {
          if (res.data.result == "success") {
            console.log("와!");
          }
        });
      // 성공하면 옆으로...

      // e.target.classList.add("Move");
      // 틀렸을 경우에
      setLoginFail(true);
      setMemberVo(update(memberVo, { password: { $set: "" } }));
    } catch (err) {
      next(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberVo(update(memberVo, { [name]: { $set: value } }));
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
            <LoginForm
              handleChange={handleChange}
              memberVo={memberVo}
              login={login}
              loginFail={loginFail}
            />
            <NonMembers />
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
