"use strict";
function getAppointment(id) {
    return new Promise((resolve, reject) => {
        resolve({
            customerId: 1
        });
    });
}
function getCustomer(customerId) {
    return new Promise((resolve, reject) => {
        resolve({
            customerId: 1
        });
    });
}
function loadAppointment(id) {
    return getAppointment(id)
        .then(appointment => { getCustomer(appointment.customerId); })
        .then(customer => {
        return { appointmentId: id, customer };
    }).catch(err => {
        console.log(err);
    });
}
console.log(loadAppointment(1));
