import React from "react";
import GuestbookAddForm from "./GuestbookAddForm";
import GuestbookList from "./GuestbookList";

export default function Guestbook() {
  return (
    <div className="Guestbook">
      <h1>방명록</h1>
      <GuestbookAddForm />
      <GuestbookList />
    </div>
  );
}
