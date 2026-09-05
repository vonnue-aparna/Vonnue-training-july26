// Task 14:
// Issue: The refreshCalendar() function triggers before the appointments have actually finished
// saving.
// Broken Code:
// async function saveAll(appointments) {
// appointments.forEach(async appointment => {
// await saveAppointment(appointment);
// });
// await refreshCalendar();
// }
// ●​ Expected Output: refreshCalendar() must trigger only after all saves complete
// sequentially or in parallel.
// ●​ Edge Case: An empty appointments array should immediately call refreshCalendar().

async function saveAll(appointments) {
    for(let appointment of appointments){
        await saveAppointment(appointment);
    }
    await refreshCalendar();
}

// Issue: The refreshCalendar() function triggers before the appointments have actually finished saving.
// Reason: forEach iterator requires a callback function which runs asynchronosly breaking the sequential execution of async function saveAll
// Fix :  replace the forEach witha simple for loop to asynchronosly run all awaits