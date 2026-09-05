type UserType = {
  id: number;
  name: string;
  profile: {
    city: string;
    active: boolean;
  };
};

const users = [
  { id: 1, name: "Asha", profile: { city: "Pune", active: true } },
];

function updateUser(users: UserType[], id: number, changes: Partial<UserType>) {
  const newUsers: UserType[] = [];
  users.forEach((user) => {
    if (user.id === id) {
      newUsers.push({
        ...user,
        ...changes,
      });
    } else {
      newUsers.push(user);
    }
  });

  return newUsers;
}
console.log(updateUser(users, 1, { name: "Asha Khan" }));
