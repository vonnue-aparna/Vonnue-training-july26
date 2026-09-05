
function updateUser(users, id, changes){
    // Assuming unique ids
    let usersCopy=[...users]//shallow
    // console.log(usersCopy===users);
    users.forEach(user => {
        let usersKeys=Object.keys(user)
        
        if(user.id==id){
            Object.keys(changes).forEach(key=>{
                if(usersKeys.includes(key)){
                    console.log(key);
                    usersCopy.forEach(usercopy =>{
                        usercopy[key]=changes
                    })
                }
                else{
                    console.log("Edge Case to Test: Passing an ID that does not exist in the array should return an exact copy of the original array.");
                    console.log(key,"DOES NOT EXIST");
                    return users                    
                }
            })
        }
    });
    console.log(usersCopy);
    return usersCopy
    
}
const users = [
{ id: 1, name: "Asha", profile: { city: "Pune", active: true } }
];

updateUser(users, 1, { name: "Asha Khan" });
updateUser(users, 1, { XXXX: "Asha Khan" });