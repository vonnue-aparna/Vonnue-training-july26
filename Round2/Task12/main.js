const appointments = [
  { id: "A1", customerId: "C1" },
  { id: "A2", customerId: "C2" },
];

const customers = [
  { id: "C1", name: "Asha" },
  { id: "C2", name: "Aisha" },
];

function getAppointment(id) {
  return appointments.filter((element) => element.id === id);
}

function getCustomer(customerId) {
  return customers.filter((element) => element.id === customerId);
}

function loadAppointment(id) {
  return getAppointment(id)
    .then((appointment) => {
      try {
        getCustomer(appointment.customerId);
      } catch (error) {
        return;
      }
    })
    .then((customer) => {
      return { appointmentId: id, customer };
    });
}

console.log(loadAppointment("A1"));
