"use strict";
async function getOrder(orderId) {
    return Promise.resolve({
        orderId: "O100",
        customerId: 1,
        productId: 2,
    });
}
async function getCustomer(customerId) {
    return Promise.resolve("Asha");
}
async function getProduct(productId) {
    return Promise.resolve("Laptop");
}
async function getOrderSummary(orderId) {
    try {
        const { customerId, productId } = await getOrder(orderId);
        const customerName = await getCustomer(customerId);
        const productName = await getProduct(productId);
        return Promise.resolve({
            orderId: orderId,
            customerName: customerName,
            productName: productName,
        });
    }
    catch (err) {
        return Promise.reject({
            orderId: undefined,
            customerName: undefined,
            productName: undefined,
        });
    }
}
async function getResult() {
    const result = await getOrderSummary("21");
    return result;
}
console.log(getResult());
