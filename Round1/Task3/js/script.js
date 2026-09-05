function uniqueUsers(users) {

    let output = [];
    let userID = [];

    for (let index = 0; index < users.length; index++) {
        if (users[index].id in userID) {
            continue;
        }

        else {
            userID.push(users[index].id)
            output.push(users[index]);
        }
        
    }

    return output;

}

const users = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" },
    { id: 1, name: "Asha" },
    { id: 3, name: "Meera" }
];

let result = uniqueUsers(users);
console.log(result);