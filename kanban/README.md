## Kanban Board

구조적으로 설계를 해야 함(Component)
함수, 클래스 둘다 사용해 봐,.,,,,,,,,,,

App.js

```javascript
<div id="root">
  <KanbanBoard />
</div>
```

KanbanBoard.js

```javascript
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
```

CardList.js

```javascript
<Card />
```

Card.js

```javascript
<TaskList />
```

TaskList.js

```javascript
<Task />
```

Task.js

```javascript
.....
```
