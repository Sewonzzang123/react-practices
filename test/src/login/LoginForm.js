import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../assets/scss/login/LoginForm.scss";

export default function LoginForm({
  handleChange,
  memberVo,
  login,
  loginFail,
}) {
  return (
    <div className={styles.LoginForm}>
      <div className={styles.Message}>
        <h1>로그인</h1>
        <div className={styles.MessageInfo}>
          <span>로그인을 통해 mehago를 이용해 보세요.</span>
        </div>
      </div>
      <form onSubmit={login}>
        <div className={styles.Id}>
          <TextField
            id="outlined-basic"
            className={styles.IdInput}
            type="text"
            label="ID"
            variant="outlined"
            size="medium"
            autoComplete="off"
            name="id"
            value={memberVo.id}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.Password}>
          <TextField
            id="outlined-basic"
            className={styles.PasswordInput}
            type="password"
            label="패스워드"
            variant="outlined"
            size="medium"
            name="password"
            value={memberVo.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {loginFail === false ? (
          ""
        ) : (
          <div className={styles.LoginFail} name="loginFail">
            <span>가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.</span>
          </div>
        )}
        <div className={styles.LoginButton}>
          <Button
            className={styles.LoginBtn}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
}
