function saveAll(appointments) {
    if(appointments.length > 0) {
        
        appointments.forEach(appointment => {
            saveAppointment(appointment);
        });
    }

    refreshCalendar();
}
