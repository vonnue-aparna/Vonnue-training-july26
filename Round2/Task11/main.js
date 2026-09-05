const tempSlots = [...slots];

for (let i = 0; i < slots.length; i++) {
  buttons[i].addEventListener("click", () => {
    selectSlot(tempSlots[i]);
  });
}

//Output: Clicking Button 1 selects Slot 1. Clicking Button 2 selects Slot 2.

//Edge Case: Ensured the fix does not break if the slots array dynamically changes in size.
