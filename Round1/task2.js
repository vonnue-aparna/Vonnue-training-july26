const orders=[
{ customerId: "C1", amount: 500 },
{ customerId: "C2", amount: 300 },
{ customerId: "C1", amount: 200 },
{ customerId: "C3", amount: 1000 }
];


function getTopCustomer(orders){
   
  const result= orders.filter(function(order){

    let max= order.amount[0];

    if(order.amount >max ){
        max= order.amount;
    }

    return order;
  })
}

console.log(getTopCustomer(orders))