import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";

export default function EmaillistApp() {
  const [emails, setEmails] = useState([]);
  const [keyword, setKeyword] = useState("");

  /** cors 찾아보기 */

  // await 가 버전이 높아서 error 가 생김 > polyfil로 async await=>callback으로 바꿔주기
  // npm i -D @babel/plugin-transform-runtime
  useEffect(async () => {
    try {
      const response = await fetch("/api", {
        method: "get",
        mode: "same-origin",
        header: {
          "Content-Type": "application/json",
        },
        body: null,
      });
      // 실패
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      // 성공 response>json
      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const notifyKeywordChange = function (keyword) {
    setKeyword(keyword);
  };

  return (
    <div className={"EmaillistApp"}>
      <Searchbar keyword={keyword} callback={notifyKeywordChange} />
      <Emaillist emails={emails} keyword={keyword} />
    </div>
  );
}
