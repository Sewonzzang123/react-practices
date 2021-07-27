import React, { Component } from "react";
import FoodList from "./FoodList";

export default class App extends Component {
  constructor() {
    super(...arguments);
    this.foods = [
      { no: 1, name: "Bread", quantity: 10 },
      { no: 2, name: "Egg", quantity: 5 },
      { no: 3, name: "Milk", quantity: 50 },
      { no: 4, name: "Carrot", quantity: 100 },
    ];
  }
  render() {
    return (
      <div id="App">
        <FoodList foods={this.foods} />
      </div>
    );
  }
}
