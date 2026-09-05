function loadAppointments() {
    const data = JSON.parse(localStorage.getItem("appointments"));

    if (!data || data==="{bad}") {
        return [];
    }
    return data;

}