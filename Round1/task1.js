const orders = [
{ id: 1, customerId: "C1", amount: 500 },
{ id: 2, customerId: "C2", amount: 300 },
{ id: 3, customerId: "C1", amount: 200 },
{ id: 4, customerId: "C3", amount: 700 }
];


function groupOrdersByCustomer(orders) {
    return orders.flatMap(order =>
        order.customerId.map(item => ({
            ...item,
            customerId: order.id
        }))
    );
}





















// {
// "C1": [
// { id: 1, customerId: "C1", amount: 500 },
// { id: 3, customerId: "C1", amount: 200 }
// ],
// "C2": [{ id: 2, customerId: "C2", amount: 300 }],
// "C3": [{ id: 4, customerId: "C3", amount: 700 }]
// }