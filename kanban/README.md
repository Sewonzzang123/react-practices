## Kanban Board

구조적으로 설계를 해야 함(Component)

App.js

```javascript
<div id="root">
  <KanbanBoard />
</div>
```

KanbanBoard.js

```javascript
<CardList />
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
