function groupOrdersByCustomer(orders){
    let result={}
    orders.forEach(order => {
        let key=order.customerId
        if(!Object.keys(result).includes(key)){
            result[key]=[]
        }
        if(Object.keys(result).includes(key)){
            result[key].push(order)
        }
    });
    // console.log(Object.keys(result));
    // console.log(result);
    return result
}
const orders = [
{ id: 1, customerId: "C1", amount: 500 },
{ id: 2, customerId: "C2", amount: 300 },
{ id: 3, customerId: "C1", amount: 200 },
{ id: 4, customerId: "C3", amount: 700 }
];

console.log(groupOrdersByCustomer(orders));
console.log(groupOrdersByCustomer([]));
