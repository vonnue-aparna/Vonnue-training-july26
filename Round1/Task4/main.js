function updateUser(users, id, changes) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].name = changes;
    }
  }

  return users;
}

const users = [
  { id: 1, name: "Asha", profile: { city: "Pune", active: true } },
];

const result = updateUser(users, 1, { name: "Asha Khan" });

console.log(result);
