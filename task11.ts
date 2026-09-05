const slots = [1, 2, 3];

//fix changed var --> let of i, therefore fixing the issue
for (let i = 0; i < slots.length; i++) {
  buttons[i].addEventListener("click", () => {
    selectSlot(slots[i]);
  });
}
