import React, { Component } from "react";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <div id="App">
      <MyComponent
        /*props01={"문자열"}*: Not Required, Default Value Set*/
        props02={1}
        props03={true}
        props04={{ no: 123, name: "dooly" }}
        props05={[1, 2, 3, 4, 5]}
        props06={() => <span>props06 : function</span>}
        props07={100}
        props08={[true, false, true]}
        props09={{ no: 1, name: "dooly", email: "dooly@example.com" }}
      />
    </div>
  );
}
