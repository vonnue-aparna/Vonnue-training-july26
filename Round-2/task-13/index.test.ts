import { describe, it, expect, beforeEach } from 'vitest'
import { addAppointment, State } from '.'

describe("addAppointment", () => {
    
    let intialState:State = {
        appointments:[{ appointmentId: "A1", customer: { id: "C1", name: "Asha" } }]
    }

    it("checking add", () => {
        console.log(intialState)
        let state = addAppointment(intialState, { appointmentId: "A2", customer: { id: "C2", name: "Anna" } })
        
        console.log(intialState)
        console.log(state)
        expect(state).not.toStrictEqual(intialState)
        expect(intialState.appointments).not.toEqual(state.appointments)

        // let undefinedStateResult = addAppointment(intialState,{undefined})
    })
})