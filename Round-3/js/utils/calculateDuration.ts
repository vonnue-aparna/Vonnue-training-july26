export function calculateDurationInHours(start: Date, end: Date) {
    return end.getHours() - start.getHours() 
}

export function calculateDurationInMinutes(start: Date, end: Date) {
    return end.getMinutes() - start.getMinutes() 
}