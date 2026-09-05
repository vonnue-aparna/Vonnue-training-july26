const appointments=[
    {
        name:"Sona",
        age:22,
        description:"Moving to Canada"
        
    },
    {
        name:"Ram",
        age:24,
        description:"Moving to Australia"
        
    },
    {
        name:"Kajal",
        age:28,
        description:"Moving to TVM,Kerala"
        
    }
]

function loadAppointments(){

    const data=[];

   appointments.forEach((appointment)=>{
     
    if(appointment ==="null" || !appointment.trim() || appointment==="{bad}"){
         
        return data.clear();

    }

    data.push(localStorage(JSON.stringify(appointment)));
   })

    console.log(data);


    return JSON.parse(localStorage.getItem("appointments"));
}
loadAppointments();