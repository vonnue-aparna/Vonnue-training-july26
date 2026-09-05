const users = [
{ id: 1, name: "Asha" },
{ id: 2, name: "Ravi" },
{ id: 1, name: "Asha" },
{ id: 3, name: "Meera" }
];


function uniqueUsers(users){
    users.forEach(user => {
        const unique= user.filter(function(uniqueUsers){
            let count= 1;
            if(uniqueUsers.id=== count ){
                return uniqueUsers;
                count++;
            }
        })
        
    });
}

console.log(uniqueUsers())
