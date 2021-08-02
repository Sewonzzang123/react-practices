import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../assets/css/Task.css";

export default function Task({ name, done }) {
  const [finished, setFinished] = useState(done);

  return (
    <li className={styles.TaskList__Task}>
      <input
        type="checkbox"
        value={finished}
        defaultChecked={finished}
        onChange={(e) => setFinished(e.target.value)}
      />
      {name}
      <a href="#" className={styles["TaskList__Task--remove"]}></a>
    </li>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
