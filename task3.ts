type User = {
  id: number;
  name: string;
};

const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 1, name: "Asha" },
  { id: 3, name: "Meera" },
];

function uniqueUsers(users: Array<User>) {
  const newUsers = new Map();

  users.forEach((user) => {
    if (!newUsers.has(user.id)) {
      newUsers.set(user.id, user.name);
    }
  });

  const newUsersArr: Array<User> = [];
  newUsers.forEach((value, key) => {
    newUsersArr.push({
      id: key,
      name: value,
    });
  });

  return newUsersArr;
}

console.log(uniqueUsers(users));
