import { addAppointment } from './task13.js'

describe('addAppointment',()=>{
    let state={
        appointments:[]
    }
    it('Testcase1',()=>{
        expect(addAppointment(state,"Meet with CEO")).not.toEqual(state)
    })
    state={}
    it('Testcase2',()=>{
        expect(addAppointment(state)).not.toEqual(state)
    })
})