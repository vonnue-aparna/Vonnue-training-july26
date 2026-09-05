import { describe, it, expect, beforeEach, vi } from 'vitest'


describe("calendar", () => {
    it("test", () => {
        let refreshCalendar = vi.fn()
        let saveAppointment = vi.fn()

        let saveAll = vi.fn(async(appointments: []) => {
            if (appointments.length !== 0) {
            for (const appointment of appointments) {
                await saveAppointment(appointment)
            }
            }

            await refreshCalendar()
        })

        saveAll([])

        expect(saveAppointment).toHaveBeenCalledBefore(refreshCalendar)
    })
})