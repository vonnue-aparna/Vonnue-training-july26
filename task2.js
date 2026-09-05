function getTopCustomer(orders){
    if(orders.length===0){
        // console.log(null);
        return null
    }
    let topCustomer=orders[0]
    orders.forEach(order => {
        if(order.amount>topCustomer.amount){
            topCustomer=order
        }
    });
    // console.log(topCustomer);
    return topCustomer
    
}

const orders = [
{ customerId: "C1", amount: 500 },
{ customerId: "C2", amount: 300 },
{ customerId: "C1", amount: 200 },
{ customerId: "C3", amount: 1000 }
];
getTopCustomer(orders)
getTopCustomer([])