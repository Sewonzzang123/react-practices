import React from "react";
import styles from "./assets/scss/GuestbookAddForm.scss";

export default function GeustbookAddForm({ Guestbookvo, callback }) {
  return (
    <form
      className={styles.Guestbook__Form}
      onSubmit={(e) => {
        e.preventDefault();
        callback(Guestbookvo);
      }}
    >
      <input
        type="text"
        id="input-name"
        placeholder="이름"
        onChange={(e) => {
          Guestbookvo.name = e.target.value;
        }}
        onSubmit={(e) => (e.target.value = "")}
      />
      <input
        type="password"
        id="input-password"
        placeholder="비밀번호"
        onChange={(e) => {
          Guestbookvo.password = e.target.value;
        }}
        onSubmit={(e) => (e.target.value = "")}
      />
      <textarea
        id="tx-content"
        placeholder="내용을 입력해 주세요."
        onChange={(e) => {
          Guestbookvo.message = e.target.value;
        }}
        onSubmit={(e) => (e.target.value = "")}
      ></textarea>
      <input type="submit" value="보내기" />
    </form>
  );
}
