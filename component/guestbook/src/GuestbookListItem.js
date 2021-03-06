import React, { Fragment } from "react";
import styles from "./assets/scss/GuestbookListItem.scss";

export default function GuestbookListItem({ name, message, regDate }) {
  return (
    <li className={styles["Guestbook__List__Item"]}>
      <strong>{name}</strong>
      <p>
        {message &&
          message.split("\n").map((line, index) =>
            index > 0 ? (
              <Fragment key={index}>
                <br />
                {line}
              </Fragment>
            ) : (
              line
            )
          )}
      </p>
      <strong>{regDate}</strong>
      <a href="">삭제</a>
    </li>
  );
}
