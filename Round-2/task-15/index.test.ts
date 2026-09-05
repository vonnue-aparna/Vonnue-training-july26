import { describe, it, expect, beforeEach } from 'vitest'
import { getData, loadUsers } from '.'



describe("promise.all test", () => {
    it("are functions called", async() => {
        let data = await getData()
        expect(data).toEqual([[], [], []])
    })

})