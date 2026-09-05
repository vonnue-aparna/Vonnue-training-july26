type Order = {
    customerId: string,
    amount:number
}

const orders:Order[] = [
{ customerId: "C1", amount: 500 },
{ customerId: "C2", amount: 300 },
{ customerId: "C1", amount: 200 },
{ customerId: "C3", amount: 1000 }
];

function getTopCustomer(orders: Order[]) {
    if(orders.length === 0) return null
    let maxCustomerAmount: number = orders.reduce((maxCustomerAmount, next) => Math.max(next.amount, maxCustomerAmount), -1)
    return orders.filter(order => order.amount === maxCustomerAmount)
}

console.log(getTopCustomer(orders))

export{}