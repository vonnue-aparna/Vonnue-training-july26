import { describe, it, expect, beforeEach,vi } from 'vitest'
import { loadAppointments } from './localstorage'

describe("localStorage", () => {

    let ls = vi.spyOn(Object.prototype, "get-item");
    
    it("parsing test", () => {
        let data = loadAppointments()
        
    })
})