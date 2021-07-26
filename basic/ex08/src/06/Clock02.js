import React, { Component, Fragment } from "react";

export default function () {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
      {("0" + (hour > 12 ? hour - 12 : hour)).slice(-2)}:
      {("0" + minute).slice(-2)}:{("0" + second).slice(-2)}
      {hour > 12 ? "PM" : "AM"}
    </div>
  );
}
