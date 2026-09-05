function getTopCustomer(orders) {
  if (orders.length === 0) {
    return null;
  }

  let final = new Map();

  for (let i = 0; i < orders.length; i++) {
    if (!final.has(orders[i].customerId)) {
      final.set(orders[i].customerId, orders[i].amount);
    } else {
      let temp_amount = orders[i].amount;
      final.set(orders[i].customerId, (orders[i].amount += temp_amount));
    }
  }

  return final;
}

const orders = [
  { customerId: "C1", amount: 500 },
  { customerId: "C2", amount: 300 },
  { customerId: "C1", amount: 200 },
  { customerId: "C3", amount: 1000 },
];

const result = getTopCustomer(orders);

console.log(result.forEach((element) => {}));
