function loadAppointment(id) {
    
    return getAppointment(id)
        .then(appointment => {
            try {
                getCustomer(appointment.customerId);
            } catch (error) {
                throw new Error("Something went wrong", error);
            }
        })

        .then(customer => {
            return { 
                appointmentId: id, 
                customer: {
                    "id": appointment.customerId, 
                    "name": appointment.customerName
                } 
            };
        });
}