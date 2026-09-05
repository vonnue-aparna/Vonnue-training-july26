// Task 15
// Issue: Promise.all() is receiving an array of function definitions instead of active Promises.
// Broken Code:
// const data = await Promise.all([
// loadUsers,
// loadAppointments,
// loadSettings
// ]);
// ●​ Expected Output: Returns an array of resolved data: [users, appointments, settings].
// ●​ Edge Case: Ensure the functions are actually invoked.

const data = await Promise.all([
    loadUsers(),
    loadAppointments(),
    loadSettings()
]);

// Issue: Promise.all() is receiving an array of function definitions instead of active Promises.
// 



// const functionDefinitions=[users, appointments, settings]
// async function data(functionDefinitions) {
//     resolvedData=[]
//     for(fn of functionDefinitions){
//         let body=await fn() // We can assume awaiting the fn returns a body
//         resolvedData.push(body)
//     }
    
// }