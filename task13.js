// Task 13:
// Issue: The state updater function directly modifies the existing state array instead of returning a
// fresh copy.
// Broken Code:
// function addAppointment(state, appointment) {
// state.appointments.push(appointment);
// return { ...state };
// }
// ●​ Expected Output: newState !== oldState AND newState.appointments !==
// oldState.appointments.
// ●​ Edge Case: Passing an empty state object or an undefined appointments array.

function addAppointment(state, appointment) {
    let newState={ ...state }
    newState.appointments=[...newState.appointments]
    newState.appointments.push(appointment);
    return newState;
}

// Issue: The state updater function directly modifies the existing state array instead of returning a fresh copy.
// Reason : push() operation was directly applied of state (which must not be mutated)
// Fix : using spread operator a new state was built as a shallow copy and apllied to to the next level array, appointments
// ans retrune the newState

