function uniqueUsers(users){
    let result=[]
    let idInResult=[]
    users.forEach(user => {
        if(!result.includes(user) && !idInResult.includes(user.id)){
            result.push(user)
            idInResult.push(user.id)
        }
    });
    // console.log(result);
    return result   
}

const users = [
{ id: 1, name: "Asha" },
{ id: 2, name: "Ravi" },
{ id: 1, name: "Asha" },
{ id: 1, name: "Jony" },
{ id: 3, name: "Meera" }
];

const usersEdge = [
{ id: 1, name: "Asha1" },
{ id: 1, name: "Asha" },
{ id: 1, name: "Jony" },
];

uniqueUsers(usersEdge)