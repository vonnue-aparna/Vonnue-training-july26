function selectSlot(n) {
    console.log(`Slot ${n} selected`);
}

for (let i = 0; i < slots.length; i++) {
    buttons[i].addEventListener("click", () => {
        selectSlot(slots[i]);
    });
}

