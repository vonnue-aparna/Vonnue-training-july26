import { describe, it, expect, beforeEach } from 'vitest'
import { addListenerToButtons } from '.'

describe("isEventListenerAddedCorrectly", () => {

    let buttons: any[] = []
    let slots: any[] = []

    beforeEach(() => {
        for (let i = 0; i < 5; i++){
            let button = document.createElement("button")
            buttons.push(button)
            slots.push(i)
        }
    })
    
    it("test-1", () => {
        addListenerToButtons(slots, buttons)
        let data = buttons[1].click()

        expect(data).toBe(1)
    })
})