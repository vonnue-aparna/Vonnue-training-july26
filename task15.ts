//fix: invoked the funtion that the Promise all recevies active Promises
// assumming these funtions return a promise

const data = await Promise.all([
  loadUsers(),
  loadAppointments(),
  loadSettings(),
]);
