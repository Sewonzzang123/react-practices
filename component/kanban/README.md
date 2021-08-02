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
{ title, cards }

```javascript
<div className={"CardList"}>
  <h1>{title}</h1>
  {cards.map((card) => (
    <Card
      key={card.no}
      title={card.title}
      description={card.description}
      tasks={card.tasks}
    />
  ))}
</div>
```

Card.js
{ title, description, tasks }

```javascript
<div className="Card">
  <div className="Card__Title">{title}</div>
  <div className="Card__Details">
    {description}
    <TaskList tasks={tasks} />
  </div>
</div>
```

TaskList.js
{ tasks }

```javascript
<div className="TaskList">
  <ul>
    {tasks.map((task) => (
      <Task key={task.no} name={task.name} done={task.done} />
    ))}
  </ul>
</div>
```

Task.js
{ name, done }

```javascript
<li className="TaskList__Task">
  <input type="checkbox" defaultChecked={done} />
  {name}
</li>
```

ex01
ex02
ex03 : state
