import React from "react";
import GuestbookListItem from "./GuestbookListItem";
import list from "./data.json";

export default function GuestbookList() {
  return (
    <ul className="Guestbook__List">
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
