// assign
// const o1 = { a: 1, b: 2 };
// const o2 = { b: 3, c: 4 };
// const o3 = Object.assign({}, o1, o2);

// console.log(o1); // { a: 1, b: 2}
// console.log(o2); // { b: 3, c: 4 }
// console.log(o3); // { a: 1, b: 3, c: 4 }

import fs from "fs";
let state;
let updateOrder;

console.log("=======================================");
// (X)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateOrder = state.order;
updateOrder.receive = "부산광역시 해운대구 우2동";

console.log(state.order, updateOrder, state.order == updateOrder);

console.log("=======================================");
// (O)

state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateOrder = Object.assign({}, state.order, {
  receive: "부산광역시 해운대구 우2동",
});

console.log(state.order, updateOrder, state.order == updateOrder);
