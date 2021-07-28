import React from "react";
import CardList from "./CardList";
import cards from "./data.json";

export default function KanbanBoard() {
  console.log(cards);
  //   1.외부에서 하는 방식
  const cardToDo = [];
  const cardDoing = [];
  const cardDone = [];
  cards.forEach((card) => {
    if (card.status == "ToDo") cardToDo.push(card);
    else if (card.status == "Doing") cardDoing.push(card);
    else cardDone.push(card);
  });
  return (
    //ToDo, Doing, Done
    <div className={"KanbanBoard"}>
      <CardList key="ToDo" title={"ToDo"} cards={cardToDo} />
      <CardList key="Doing" title={"Doing"} cards={cardDoing} />
      <CardList key="Done" title={"Done"} cards={cardDone} />
    </div>
  );
}

// 상태를 저장하는 component가 필요할 수 있어
/**
 * ex)guestbook
 *
 * <Guestbook>
 *      <Form/>
 *      <List/>
 * </Guestbook>
 *
 * form: 입력해서 sumit하면 list에 들어가야 하는데
 *  list에 접근할 방법이 없잖아(형제끼리 접근이 안됨)
 * >> 부모한테 알려줘서 부모가 list한테 말해줘야 해
 */
