import update from "react-addons-update";
import fs from "fs";
let state;
let updateOrder;

console.log("=======================================");
// (O)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateOrder = update(state.order, {
  // 해당 패스 값 변경
  receive: /**where*/ {
    $set: "부산광역시 해운대구 우2동" /**what */,
  },
  payment: {
    method: {
      $set: "Mobile",
    },
  },
  products: {
    $push: [
      {
        no: "s002-002",
        name: "블루 양말",
        price: 2000,
        amount: 1,
      },
    ],
    0: {
      amount: {
        $set: 5,
      },
    },
  },
});

console.log(state.order, updateOrder, state.order === updateOrder);
