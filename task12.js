// Task 12:
// Issue: The second .then() block receives undefined instead of the customer object.
// Broken Code:
// function loadAppointment(id) {
// return getAppointment(id)
// .then(appointment => {
// getCustomer(appointment.customerId);
// })
// .then(customer => {
// return { appointmentId: id, customer };
// });
// }
// ●​ Expected Output: { appointmentId: "A1", customer: { id: "C1", name: "Asha" } }.
// ●​ Edge Case: If getCustomer throws an error, the chain should gracefully catch or
// propagate it.

export function loadAppointment(id) {
    return getAppointment(id).then(appointment => {
        return getCustomer(appointment.customerId);
    }).then(customer => {
        return { appointmentId: id, customer };
    });
}

// The second .then() block receives undefined instead of the customer object.
// Reasom : .then() should return some value explicity for next .then() to chain and propogate
// added "return" to getCustomer(appointment.customerId);

