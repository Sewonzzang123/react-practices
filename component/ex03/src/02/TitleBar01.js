import React, { Component } from "react";

export default class TitelBar01 extends Component {
  constructor() {
    super(...arguments);
    // this.no=10; X
    this.state = { no: 10 };
  }
  onClickHeader(e) {
    // this.no++;
    // this.render(); X
    console.log("TitelBar01 click", this.state.no);
    this.setState({ no: this.state.no + 1 });
  }

  render() {
    return (
      <h1
        onClick={this.onClickHeader.bind(this)}
        style={{
          cursor: "pointer",
        }}
      >
        ex03-Functional Handler (Functional Component)
        {/*this.no*/ this.state.no}
      </h1>
    );
  }
}
