import { createSlice } from "@reduxjs/toolkit"


const initialState = [{

}]


const mainSlice = createSlice({
    name : 'mainPage',
    initialState,
    reducers : {
    getValue : (state, action) => {
        return state
        }
    }
})


export const {getValue} = mainSlice.actions
export default mainSlice.reducer