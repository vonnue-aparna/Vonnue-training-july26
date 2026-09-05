import { describe, expect, it, vi } from "vitest";

describe("testing task 11", () => {
  const selectSlot = vi.fn((i: number) => console.log(i));
  it("does not break if the slots array dynamically changes in size", () => {
    let slot = [1, 2, 3];
    for (let i = 0; i < slot.length; i++) {
      selectSlot(i);
      expect(selectSlot).toHaveBeenCalledWith(i);
    }

    slot.push(4);
    slot.push(5);
    slot.push(6);

    for (let i = 0; i < slot.length; i++) {
      selectSlot(i);
      expect(selectSlot).toHaveBeenCalledWith(i);
    }
  });
});
