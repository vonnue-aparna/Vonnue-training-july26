// fix
// added types to appointments
// changed the forEach loop to for loop so that the refreshCalender only runs after saving all appointmets
// if appointments doest exist the saveAll funtion immediatley calls the refreshCalender Funtion

type Appointment = {
  name: string;
  time: string;
  age: number;
};

async function saveAll(appointments: Appointment[]) {
  if (appointments && appointments.length > 0) {
    for (let i = 0; i < appointments.length; i++) {
      let appointment = appointments[i];
      await saveAppointment(appointment);
    }
  }
  await refreshCalendar();
}
