async function loadUsers(){
    const promise= new Promise((resolve)=>{
        return users={
            name:"Sona",
            age:22
        }
    });
}

loadUsers() .then((result)=>{
    console.log(result);
})

async function loadAppointments(){
    const promise = new Promise((resolve)=>{
        return function(description,venue){
            description:description;
            venue: venue;
        }
    })
}
loadAppointments()
.then((appointment)=>{
    console.log(appointment);
})

async function loadSettings(){
    const promise= new Promise((resolve,reject)=>{
        return loadAppointments;
    })
}

loadSettings()
.then((data)=>{
    console.log(`Appointments filtered ${data} `);
})
.catch((error)=>{
    console.log(error.message);
})

const data= await Promise.all([loadUsers, loadAppointments,loadSettings]);

console.log(data);
