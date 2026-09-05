import { beforeEach, describe, expect, test, vi } from "vitest";

describe("testing task 14", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const saveAppointment = vi.fn(async (appointment) =>
    Promise.resolve("saved Appointment"),
  );

  const refreshCalendar = vi.fn(async () =>
    Promise.resolve("Refreshed Calender"),
  );

  const saveAll = vi.fn(async (appointments) => {
    if (appointments && appointments.length > 0) {
      for (let i = 0; i < appointments.length; i++) {
        let appointment = appointments[i];
        console.log(appointment);

        await saveAppointment(appointment);
      }
    }
    await refreshCalendar();
  });

  test("--- testing empty appointments", () => {
    saveAll({});
    expect(saveAppointment).not.toHaveBeenCalled();
    expect(refreshCalendar).toHaveBeenCalled();
  });

  test("--- refreshCalender to be called after saveAppointment", () => {
    let appointments = [
      {
        name: "anjal",
        time: "10am",
      },
      {
        name: "john",
        time: "11am",
      },
    ];

    saveAll(appointments);
    expect(saveAppointment).toHaveBeenCalled();
  });
});
