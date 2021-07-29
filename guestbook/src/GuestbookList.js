import React from "react";
import GuestbookListItem from "./GuestbookListItem";
import list from "./assets/json/data.json";
import styles from "./assets/scss/GuestbookList.scss";

export default function GuestbookList() {
  return (
    <ul className={styles["Guestbook__List"]}>
      {list.map((listItem) => (
        <GuestbookListItem
          key={listItem.no}
          name={listItem.name}
          message={listItem.message}
          regDate={listItem.regDate}
        />
      ))}
    </ul>
  );
}
