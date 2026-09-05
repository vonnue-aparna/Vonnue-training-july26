type OrderTypeTwo = {
  customerId: string;
  amount: number;
};

const ordersTwo = [
  { customerId: "C1", amount: 500 },
  { customerId: "C2", amount: 300 },
  { customerId: "C1", amount: 200 },
  { customerId: "C3", amount: 1000 },
];

function groupBy(order: OrderTypeTwo) {
  return order.customerId;
}

function groupOrdersByCustomer(orders: Array<OrderTypeTwo>) {
  const newArr: Record<string, Array<OrderTypeTwo>> = {};
  orders.forEach((order) => {
    const key = groupBy(order);
    if (!newArr[key]) newArr[key] = [];
    newArr[key].push(order);
  });

  return newArr;
}

function getTopCustomer(orders: Array<OrderTypeTwo>) {
  const newOrders = groupOrdersByCustomer(orders);
  let total = 0;
  let topTotal = 0;
  let customerId = "";
  const keys = Object.keys(newOrders);
  console.log(keys);
  for (const key of keys) {
    newOrders[key].forEach((item) => {
      total = total + item.amount;
    });

    if (topTotal < total) {
      topTotal = total;
      customerId = key;
      total = 0;
    } else {
      topTotal = total;
      total = 0;
    }
  }

  return {
    customerId: customerId,
    total: topTotal,
  };
}

console.log(getTopCustomer(ordersTwo));
