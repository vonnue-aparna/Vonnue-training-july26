// type User = {
//     id: number;
//     name: string;
//     profile: {
//         city: string;
//         active: boolean;
//     };
// }

const users = [
{ id: 1, name: "Asha", profile: { city: "Pune", active: true } }
];

function updateUser(users, id, updates) {
    let isUserPresent = false
    for (const usr of users) {
        if (usr.id === id) {
            isUserPresent = true 
        }
    }

    if (isUserPresent) {
        return users.map(user => {
            if (user.id === id) {
                return {
                    ...user,
                    ...updates
                }
            } else {
                return user
            }
        })
    }
    return users
}

console.log(updateUser(users,2,{name:'Asha Khan'}))


export{}