// const state =  {
//     appointments: [],
//     loading: false,
//     error: null
// }

function addAppointment(state, appointment) {
    state = {
        ...state,
        ...state.appointments = appointment
    }

    return { ...state };
}
