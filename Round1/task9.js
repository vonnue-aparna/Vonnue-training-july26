
async function getOrderSummary(){

    return {
        getOrder(orderId){
            return `Users ${orderId}`
        },

        getTopCustomer(customerId){
            
            if(customerId == this.getOrder){
                return ` Top most Customer ${customerId}`
            }
        },

        getProduct(ProductID){

            return this.getTopCustomer;
        }
    }
}
