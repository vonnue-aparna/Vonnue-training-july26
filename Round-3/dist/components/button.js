export function Button(text, handler) {
    let button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", handler);
    return button;
}
