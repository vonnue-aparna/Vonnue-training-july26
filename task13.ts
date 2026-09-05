type AppointmentType = {
  patientName: string;
  time: string;
};

type StateType = {
  doctor: string;
  age: number;
  appointments: AppointmentType[];
};

export function addAppointment(
  state: StateType,
  appointment: AppointmentType,
): StateType {
  // removed because it was modifing the existing state
  // state.appointments.push(appointment);

  //fix
  if (!appointment) return state;
  return { ...state, appointments: [...state.appointments, appointment] };
}

// because it is strictly typed the funtion doest not accept empty state and undefined appointments
