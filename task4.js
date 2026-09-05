"use strict";
const users = [
    { id: 1, name: "Asha", profile: { city: "Pune", active: true } },
];
function updateUser(users, id, changes) {
    const newUsers = [];
    users.forEach((user) => {
        if (user.id === id) {
            newUsers.push({
                ...user,
                ...changes,
            });
        }
        else {
            newUsers.push(user);
        }
    });
    return newUsers;
}
console.log(updateUser(users, 1, { name: "Asha Khan" }));
