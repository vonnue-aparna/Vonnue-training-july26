type OrderSummary = {
    orderId: string,
    customerName: string,
    productName:string
}

function getOrder(orderId: string):Promise<{orderId:string,customerId:string,productId:string}> {
    return new Promise((resolve, reject) => {
        resolve({
            orderId: orderId,
            customerId: '1200',
            productId:'1100'
        })
    })
}


function getCustomer(customerId:string):Promise<{customerId:string,customerName:string,productId:string}> {
    return new Promise((resolve, reject) => {
        resolve({
            customerId: customerId,
            customerName: 'Asha',
            productId:'1200'
        })
    })
}

function getProduct(productId: string):Promise<{productId:string,productName:string}> {
    return new Promise((resolve, reject) => {
        resolve({
            productId: productId,
            productName:"Laptop"
        })
    })
}

async function getOrderSummary(orderId: string): Promise<OrderSummary>{
    try {
        let order = await getOrder(orderId)
        let customer = await getCustomer(order.customerId)
        let product = await getProduct(order.productId)

        return new Promise((resolve) => {
            resolve({
                orderId,
                customerName: customer.customerName,
                productName:product.productName
            })
        })
    } catch (err) {
        return new Promise((reject) => {
            new Error('Something went wrong')
        })
    }
}