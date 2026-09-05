async function loadUsers() {
    return {
        "customerId": 1,
        "name": "Kl"
    }
}

async function loadAppointments() {
    return {
        "appointmentId": 1,
        "customerId": 1,
        "time": "16:00",
        "date": "2026-09-01" 
    }
}

async function loadSettings() {
    return {
        "darkMode": true
    }
}

const data = await Promise.all( [
    loadUsers(),
    loadAppointments(),
    loadSettings()
]);
