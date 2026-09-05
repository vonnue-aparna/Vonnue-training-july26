import { describe, it, expect } from 'vitest'
import { debounce } from './index.js'

describe("debounce", () => { 
    beforeEach(() => { 
        vi.useFakeTimers()
    })

    afterEach(() => { 
        vi.useRealTimers()
    })

    it("testing bounce", () => {
        let callback = vi.fn()

        let debouncedFn = debounce(callback, 300)
        
        for (let index = 0; index < 5; index++) {
            debouncedFn()
        }

        vi.advanceTimer(300)

        expect(callback).toHaveBeenCalledTimes(1)
    })
})