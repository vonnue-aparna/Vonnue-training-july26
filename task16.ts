// fix
// added type for the appointments
// if the there is no data in localstorage it will return an empty array
// we can check whether the appointments staisfies the type if it not we can return an empty array, currently i forgot the syntax for checking the type

type Appointments = {
  name: string;
  age: number;
  slot: string;
};

function loadAppointments() {
  const savedData = localStorage.getItem("appointments");
  if (savedData) {
    const appointments: Appointments[] = JSON.parse(savedData);

    return appointments;
  }

  return [];
}
