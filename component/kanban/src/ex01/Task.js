import React from "react";

export default function Task({ name, done }) {
  return (
    <li className="TaskList__Task">
      <input type="checkbox" defaultChecked={done} />
      {name}
    </li>
  );
}
