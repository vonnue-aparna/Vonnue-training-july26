//fix: invoked the funtion that the Promise all recevies active Promises

const data = await Promise.all([
  loadUsers(),
  loadAppointments(),
  loadSettings(),
]);
