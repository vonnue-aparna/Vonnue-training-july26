"use strict";
const users = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" },
    { id: 1, name: "Asha" },
    { id: 3, name: "Meera" },
];
function uniqueUsers(users) {
    const newUsers = new Map();
    users.forEach((user) => {
        if (!newUsers.has(user.id)) {
            newUsers.set(user.id, user.name);
        }
    });
    const newUsersArr = [];
    newUsers.forEach((value, key) => {
        newUsersArr.push({
            id: key,
            name: value,
        });
    });
    return newUsersArr;
}
console.log(uniqueUsers(users));
