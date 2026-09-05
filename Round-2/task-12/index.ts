function getAppointment(id: number):Promise<{customerId:number}> {
    return new Promise((resolve, reject) => {
        resolve({
           customerId:1
       }) 
    }) 
}

function getCustomer(customerId: number) {
    return new Promise((resolve, reject) => {
        resolve({
            id: "1",
            name:'Asha'
       }) 
    })
}


function loadAppointment(id: number) {
    return getAppointment(id)
            .then(appointment => getCustomer(appointment.customerId))
            .then(customer => ({
                 appointmentId: id, customer:customer 
            })).catch(err => {
            console.log(err)
            })
}

loadAppointment(1).then((data) => console.log(data))