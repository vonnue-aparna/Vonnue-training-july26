// async function saveAll(appointments) {
//     appointments.forEach(async appointment => {
//     await saveAppointment(appointment);
//     });
    
//     await refreshCalendar();
// }

export function saveAppointment(appointment:any) {
    return 'saved'
}

export function refreshCalendar() {
    return 'refreshed calendar'
}


export async function saveAll(appointments: []) {

    if (appointments.length !== 0) {
        for (const appointment of appointments) {
            await saveAppointment(appointment)
        }
    }

    await refreshCalendar()
}
