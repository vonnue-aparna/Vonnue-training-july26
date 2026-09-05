export function loadAppointments() {
    let data = localStorage.getItem("appointments")
    if (!data) return []

    return JSON.parse(data)
}