function getAppointment(appointmentId){
    return{
        appointmentId:appointmentId
    }
}


function getCustomer(customerId){
    try{
        return{
            customerId:customerId
        }
    }catch(error){
      console.log("Error", error);
    }
}


function loadAppointment(id){

    try{
        return getAppointment(id)

    .then(appointment=>{
        getCustomer(appointment.customerId);

        if(!getCustomer.ok){
            throw new Error("Invalid");
        }
    })

    .then(customer=>{
        return {
            appointmentId:id, customer
        };
    }); 
    }
    catch(error){
        console.log(error.message);
    }
    
}
