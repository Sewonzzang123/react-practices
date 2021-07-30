import React from "react";
import styles from "../assets/css/Task.css";
export default function Task({ name, done }) {
  return (
    <li className={styles.TaskList__Task}>
      <input type="checkbox" defaultChecked={done} />
      {name}
      <a href="#" className={styles["TaskList__Task--remove"]}></a>
    </li>
  );
}
