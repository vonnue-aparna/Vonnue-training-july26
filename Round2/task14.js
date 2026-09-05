function refreshCalender(){
    
}


function saveAppointment(){

}

async function saveAll(appointments){
    appointments.forEach(async appointment=>{
        await saveAppointment(appointment);
    });
    await refreshCalender();

}