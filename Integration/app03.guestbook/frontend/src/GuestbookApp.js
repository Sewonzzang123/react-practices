import React, { useState, useEffect } from "react";
import GuestbookAddForm from "./GuestbookAddForm";
import GuestbookList from "./GuestbookList";
import styles from "./assets/scss/Guestbook.scss";

export default function Guestbook() {
  const [Guestbook, setGuestbook] = useState([]);
  const [Guestbookvo, setGuestbookvo] = useState({
    no: "",
    name: "",
    password: "",
    message: "",
  });

  useEffect(async () => {
    notifyGuestbook.fetch();
  }, []);

  const notifyGuestbook = {
    fetch: async () => {
      try {
        const response = await fetch("/api", {
          method: "get",
          mode: "same-origin",
          header: {
            "Content-Type": "application/json",
          },
          params: {
            no: 0,
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

        const list = Object.assign([], json.data, ...Guestbook);
        setGuestbook(list);
        console.log("GuestbookList", Guestbook);
        // console.log(Guestbook[Guestbook.length - 1].no);
      } catch (err) {
        console.error(err);
      }
    },
    add: async (Guestbookvo) => {
      try {
        setGuestbookvo(Guestbookvo);
        console.log(JSON.stringify(Guestbookvo));
        const response = await fetch("/api", {
          method: "post",
          mode: "same-origin",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Guestbookvo),
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
      } catch (err) {
        console.error(err);
      }
    },
    delete: {},
  };

  return (
    <div className={styles["Guestbook"]}>
      <h1>방명록</h1>
      <GuestbookAddForm
        callback={notifyGuestbook.add}
        Guestbookvo={Guestbookvo}
      />
      <GuestbookList list={Guestbook} notifyGuestbook={notifyGuestbook} />
    </div>
  );
}
