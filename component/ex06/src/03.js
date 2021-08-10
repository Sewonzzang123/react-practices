import fs from "fs";
let state;
let updateOrder;

console.log("=======================================");
// (X)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateOrder = Object.assign({}, state.order, {
  receive: "부산광역시 해운대구 우2동",
});
updateOrder.payment.method = "Mobile";
// state의 payment도 변함 payment는 deep copy가 되지 않기 때문
console.log(state.order, updateOrder, state.order === updateOrder);
