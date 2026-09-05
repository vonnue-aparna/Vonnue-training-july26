type User = {
    id: number;
    name: string;
}

const users:User[] = [
{ id: 1, name: "Asha" },
{ id: 2, name: "Ravi" },
{ id: 1, name: "Asha" },
{ id: 3, name: "Meera" }
];

function uniqueUsers(users: User[]) {
    let s: User[] = []
    console.log(users)

    s.push(users[0])

    users.forEach(user => {
        if(s.length === 0) s.push(user)
    })

    return s
}


uniqueUsers(users)
// console.log(uniqueUsers(users))