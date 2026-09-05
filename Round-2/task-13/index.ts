export type State = {
    appointments:Appoinment[]
}

export type Appoinment = { appointmentId: string, customer: { id: string, name: string } }


export function addAppointment(state: State, appointment: Appoinment) {
    if (!appointment) return state

    let y = [...state.appointments]
    y.push(appointment)

    return {
        ...state,
        appointments:y
    }
    
}