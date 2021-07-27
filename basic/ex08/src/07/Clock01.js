import React, { Component, Fragment } from "react";

export default function () {
  const date = new Date();
  let hour = date.getHours();
  let minute = ("0" + date.getMinutes()).slice(-2);
  let second = ("0" + date.getSeconds()).slice(-2);
  let session = "AM";
  if (hour > 12) {
    hour -= 12;
    session = "PM";
  }
  hour = ("0" + hour).slice(-2);
  return (
    <div>
      {hour}:{minute}:{second}
      {session}
    </div>
  );
}
