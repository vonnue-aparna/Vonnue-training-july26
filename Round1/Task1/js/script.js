function groupOrdersByCustomer(orders) {
    if(orders.length === 0) {
        return {};
    }

    let output = []

    for (let i = 0; i < orders.length; i++) {
        if(orders[i].customerId in output) {
            
        }

        else {
            output.push(orders[i]);
        }
    }

    console.log(output);
}

const orders = [
    { id: 1, customerId: "C1", amount: 500 },
    { id: 2, customerId: "C2", amount: 300 },
    { id: 3, customerId: "C1", amount: 200 },
    { id: 4, customerId: "C3", amount: 700 }
];

groupOrdersByCustomer(orders);