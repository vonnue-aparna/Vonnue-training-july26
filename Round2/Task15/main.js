let users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Aisha" },
];

async function loadUsers() {
  return [...users];
}

let appointments = [
  { appointmentId: 101, customerId: 1 },
  { appointmentId: 102, customerId: 2 },
];

async function loadAppointments() {
  return [...appointments];
}

let settings = {
  theme: "dark",
  restore: false,
};

async function loadSettings() {
  return [settings];
}

const finalUsers = loadUsers();
const finalAppointments = loadAppointments();
const finalSettings = loadSettings();

const data = await Promise.all([finalUsers, finalAppointments, finalSettings]);

console.log(data);
