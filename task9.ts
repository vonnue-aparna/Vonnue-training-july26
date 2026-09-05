type OrderSummary = {
  orderId: string | undefined;
  customerName: string | undefined;
  productName: string | undefined;
};

async function getOrder(orderId: string) {
  return Promise.resolve({
    orderId: "O100",
    customerId: 1,
    productId: 2,
  });
}

async function getCustomer(customerId: number) {
  return Promise.resolve("Asha");
}

async function getProduct(productId: number) {
  return Promise.resolve("Laptop");
}
async function getOrderSummary(orderId: string): Promise<OrderSummary> {
  try {
    const { customerId, productId } = await getOrder(orderId);
    const customerName = await getCustomer(customerId);
    const productName = await getProduct(productId);

    return Promise.resolve({
      orderId: orderId,
      customerName: customerName,
      productName: productName,
    });
  } catch (err) {
    return Promise.reject({
      orderId: undefined,
      customerName: undefined,
      productName: undefined,
    });
  }
}
