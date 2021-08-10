import fs from "fs";
let state;
let updateProduct;

console.log("=======================================");
// (X)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateProduct = state.order.products;
updateProduct.push({
  no: "s002-002",
  name: "블루 양말",
  price: 2000,
  amount: 1,
});

console.log(state.order.products);
console.log(updateProduct);
console.log(state.order.products === updateProduct);

console.log("=======================================");
// (O)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateProduct = state.order.products.concat({
  no: "s002-002",
  name: "블루 양말",
  price: 2000,
  amount: 1,
});
// setState({order:updateProducts});

console.log(state.order.products);
console.log(updateProduct);
console.log(state.order.products === updateProduct);

console.log("=======================================");
// (O)
state = {
  order: JSON.parse(fs.readFileSync("./json/data.json").toString()),
};

updateProduct = [
  ...state.order.products,
  {
    no: "s002-002",
    name: "블루 양말",
    price: 2000,
    amount: 1,
  },
];

console.log(state.order.products);
console.log(updateProduct);
console.log(state.order.products === updateProduct);
