import React from "react";

export default function CardList({ title, cards }) {
  console.log(cards);
  return (
    <div className={"CardList"}>
      <h1>{title}</h1>
    </div>
  );
}
