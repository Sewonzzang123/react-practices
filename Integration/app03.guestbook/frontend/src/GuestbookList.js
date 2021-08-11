import React, { useState, useEffect } from "react";
import GuestbookListItem from "./GuestbookListItem";
import list from "./assets/json/data.json";
import styles from "./assets/scss/GuestbookList.scss";
import update from "react-addons-update";

export default function GuestbookList() {
  const [GuestbookList, setGuestbookList] = useState([]);
  const [lastNo, setLastNo] = useState(0);

  useEffect(async () => {
    try {
      const response = await fetch("/api", {
        method: "get",
        mode: "same-origin",
        header: {
          "Content-Type": "application/json",
        },
        params: {
          no: lastNo,
        },
        body: null,
      });
      // 실패
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      // 성공 response>json
      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      setGuestbookList(json.data);
      console.log("GuestbookList", GuestbookList);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ul className={styles["Guestbook__List"]}>
      {GuestbookList.map((listItem) => (
        <GuestbookListItem
          key={listItem.no}
          no={listItem.no}
          name={listItem.name}
          message={listItem.message}
          regDate={listItem.regDate}
        />
      ))}
    </ul>
  );
}
