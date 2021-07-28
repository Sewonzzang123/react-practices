import React from "react";
import CardList from "./CardList";
import cards from "./data.json";

export default function KanbanBoard() {
  return (
    // ToDo, Doing, Done
    // copy파일처럼 하는것 보다는 cards에 바로 넣는게 좋음
    // filter
    <div className={"KanbanBoard"}>
      <CardList
        key="ToDo"
        title={"ToDo"}
        cards={cards.filter((card) => card.status == "ToDo")}
      />
      <CardList
        key="Doing"
        title={"Doing"}
        cards={cards.filter((card) => card.status == "Doing")}
      />
      <CardList
        key="Done"
        title={"Done"}
        cards={cards.filter((card) => card.status == "Done")}
      />
    </div>
  );
}
