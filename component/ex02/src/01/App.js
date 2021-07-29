import React from "react";

export default function App() {
  // style={"width:120px; height:200px"} String 안먹어

  const h1Styles = {
    width: 200,
    height: 200,
    padding: 5,
    color: "#fff",
    backgroundColor: "#ee9900",
  };

  return (
    <div id="App">
      <h1 style={h1Styles}>Inline Styling</h1>
    </div>
  );
}
