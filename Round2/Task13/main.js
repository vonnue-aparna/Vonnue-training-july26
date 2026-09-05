function addAppointment(state, appointment) {
  if (!state || !appointment) {
    return new Error("Empty state object or an undefined appointments array");
  }

  let stateCopy = [...state];

  stateCopy.push(appointment);

  return { ...stateCopy };
}

//Output: newState !== oldState AND newState.appointments !== oldState.appointments
