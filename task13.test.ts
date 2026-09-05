import { describe, expect, test } from "vitest";
import { addAppointment } from "./task13";

describe("testing task 13", () => {
  test("--- testing state", () => {
    const state = {
      doctor: "anjal",
      age: 22,
      appointments: [{ patientName: "john doe", time: "10AM" }],
    };

    const newAppoinment = {
      patientName: "Sarah",
      time: "11AM",
    };

    const newState = addAppointment(state, newAppoinment);

    expect(newState).toEqual({
      doctor: "anjal",
      age: 22,
      appointments: [
        { patientName: "john doe", time: "10AM" },
        {
          patientName: "Sarah",
          time: "11AM",
        },
      ],
    });
  });
});
