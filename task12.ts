// added strict types to loadAppointment
// the first then block was not returing therefore the second the one receives undifined, fixed it by adding return

function loadAppointment(id: string) {
  return getAppointment(id)
    .then((appointment: { customerId: string; time: string }) => {
      //fix
      return getCustomer(appointment.customerId);
    })
    .then((customer: { name: string; age: number }) => {
      return { appointmentId: id, customer };
    })
    .catch((error: Error) => {
      if (error instanceof Error) console.log(error);
    });
}
