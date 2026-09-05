function uniqueUsers(users) {
  let finalUsers = new Set();

  for (let i = 0; i < users.length; i++) {
    if (finalUsers.has(users[i].id)) {
      continue;
    }
    finalUsers.add(users[i]);
  }

  return finalUsers;
}

const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 1, name: "Asha" },
  { id: 3, name: "Meera" },
];

console.log(uniqueUsers(users));
