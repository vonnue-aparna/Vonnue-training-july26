export async function getData() {
    const data = await Promise.all([
        loadUsers(),
        loadAppointments(),
        loadSettings()
    ]);

    return data
}

export function loadUsers(): any {
    console.log("load users called")
    return new Promise((resolve) => resolve([]))
}
export function loadSettings(): any {
    console.log("load settings called")
    return new Promise((resolve) => resolve([]))
}

export function loadAppointments(): any{
    console.log("load appointments called")
    return new Promise((resolve) => resolve([]))
}