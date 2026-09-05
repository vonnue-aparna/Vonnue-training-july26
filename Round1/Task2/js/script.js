function getTopCustomer(orders) {

    if (orders.length === 0) {
        return null;
    }

    let max = 0;
    let maxId = ""

    for (let i = 0; i < orders.length; i++) {
        if(orders[i].amount > max) {
            max = orders[i].amount;
            maxId = orders[i].customerId;
        }
    }

    return {
        "customerId": maxId,
        "total": max
    }
}

const orders = [
    { customerId: "C1", amount: 500 },
    { customerId: "C2", amount: 300 },
    { customerId: "C1", amount: 200 },
    { customerId: "C3", amount: 1000 }
];

let result = getTopCustomer(orders)
console.log(result);
