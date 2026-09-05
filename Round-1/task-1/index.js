const orders = [
{ id: 1, customerId: "C1", amount: 500 },
{ id: 2, customerId: "C2", amount: 300 },
{ id: 3, customerId: "C1", amount: 200 },
{ id: 4, customerId: "C3", amount: 700 }
];

function groupOrdersByCustomer(orders) {
    if(orders.length === 0) return {}
    let out = new Map()
    orders.map(order => {
        console.log(out)
        if (!out.has(order.customerId)) {
            out.set(order.customerId,[order])
        } else {
            out[customerId].push(order)
        }
    });
    return out
}

console.log(groupOrdersByCustomer(orders))