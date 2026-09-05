import { describe,it,expect } from "vitest";
import { calculateDurationInHours } from "../utils/calculateDuration";

describe("duration test",()=> {
    it("duration test", () => {
        let start = new Date(1788607762354)
        let end = new Date(1788607762354)

        let data = calculateDurationInHours(start, end)
        expect(data).toBe(0)
    })
})