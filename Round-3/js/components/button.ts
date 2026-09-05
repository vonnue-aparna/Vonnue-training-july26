export function Button(text: string, handler: () => void) {
    let button = document.createElement("button")
    button.innerText = text
    button.addEventListener("click", handler);

    return button
}