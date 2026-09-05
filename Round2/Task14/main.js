let totalAppointments = [
  { appointmentId: 101, customerId: 1 },
  { appointmentId: 102, customerId: 2 },
];

let count = 0;

async function saveAppointment(appointment) {
  if (!appointment) {
    return false;
  }

  totalAppointments.push(appointment);
  count += 1;
  return true;
}

async function saveAll(appointments) {
  if (appointments.length === 0) {
    await refreshCalendar();
  }

  appointments.forEach(async (appointment) => {
    await saveAppointment(appointment);
  });

  if (totalAppointments.length === count) {
    await refreshCalendar();
  }
}
