import React from "react";
import CardList from "./CardList";
import cards from "../assets/json/data.json";

export default function KanbanBoard() {
  console.log(cards);
  //  2.
  const cardList = {
    ToDo: [],
    Doing: [],
    Done: [],
  };
  cards.forEach((card) => {
    cardList[card.status].push(card);
  });

  return (
    //ToDo, Doing, Done
    <div className={"KanbanBoard"}>
      <CardList key="ToDo" title={"ToDo"} cards={cardList["ToDo"]} />
      <CardList key="Doing" title={"Doing"} cards={cardList["Doing"]} />
      <CardList key="Done" title={"Done"} cards={cardList["Done"]} />
    </div>
  );
}
