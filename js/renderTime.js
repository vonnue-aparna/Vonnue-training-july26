export function renderTime(targetDOM,elapsedTime) {
    targetDOM.textContent=""
    targetDOM.prepend(elapsedTime)
}