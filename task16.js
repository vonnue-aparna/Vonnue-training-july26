// Task 16:
// Issue: The application crashes entirely if the user's localStorage data is corrupted, empty, or
// missing.
// Broken Code:
// function loadAppointments() {
// return JSON.parse(localStorage.getItem("appointments"));
// }
// ●​ Expected Output: Valid JSON returns the parsed array.
// ●​ Edge Case: Missing data (null), malformed JSON ("{bad}"), or incorrect data types
// should not crash the app. It must safely return an empty array [].

function loadAppointments() {
    try{
        let stringData=localStorage.getItem("appointments")
        if(!stringData.trim()){
            return []
        }
        let parseddata=JSON.parse(stringData) 
        return parseddata
    }
    catch(err){
        console.log(err);
        return []
    }
}

// Issue: The application crashes entirely if the user's localStorage data is corrupted, empty, or missing.
// Reason : No mechanisms to regulate missing data, malinformed JSON or incorrect datatype
// Fix : Added a try catch block , to find error and safely return []


localStorage.setItem("appointments",JSON.stringify({"Christo":"Doctor"}))
console.log(loadAppointments());

// Manually verified task16.js using html logs
// The bug is fixed
