// Task 11:
// Issue: A loop assigning events always applies the final iterated value to every button.
// Broken Code:
// for (var i = 0; i < slots.length; i++) {
// buttons[i].addEventListener("click", () => {
// selectSlot(slots[i]);
// });
// }
// ●​ Expected Output: Clicking Button 1 selects Slot 1. Clicking Button 2 selects Slot 2.
// ●​ Edge Case: Ensure the fix does not break if the slots array dynamically changes in size.

for (let i = 0; i < slots.length; i++) {
    buttons[i].addEventListener("click", () => {
        selectSlot(slots[i]);
    });
}

// Issue: A loop assigning events always applies the final iterated value to every button.
// caused due to declaring i as var
// Fix change : var to let