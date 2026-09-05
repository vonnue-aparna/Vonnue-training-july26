"use strict";
const orders = [
    { id: 1, customerId: "C1", amount: 500 },
    { id: 2, customerId: "C2", amount: 300 },
    { id: 3, customerId: "C1", amount: 200 },
    { id: 4, customerId: "C3", amount: 700 },
];
function groupBy(order) {
    return order.customerId;
}
// const newArr: Record<string, Array<OrderType>> = {};
function groupOrdersByCustomer(orders) {
    const newArr = {};
    orders.forEach((order) => {
        const key = groupBy(order);
        if (!newArr[key])
            newArr[key] = [];
        newArr[key].push(order);
    });
    return newArr;
}
console.log(groupOrdersByCustomer(orders));
