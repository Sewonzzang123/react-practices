import React from "react";
import Email from "./Email";
import PropTypes from "prop-types";

export default function Emaillist({ emails, keyword }) {
  //   console.log("rendering...emaillist");
  return (
    <ul className={"Emaillist"}>
      {emails
        .filter(
          (item) =>
            item.firstName.indexOf(keyword) != -1 ||
            /**firstName에 키워드가 있다면 true */
            item.lastName.indexOf(keyword) != -1 ||
            item.email.indexOf(keyword) != -1
          /**true 다 통과시키는 조건 */
        )
        .map((item) => (
          <Email
            key={item.no}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
          />
        ))}
    </ul>
  );
}

Emaillist.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.shape(Email.PropTypes)),
};
