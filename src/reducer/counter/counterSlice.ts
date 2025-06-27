import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store/store"

interface CounterState{
  value:number
}

const initialState:CounterState = {
   value: 0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
           state.value = state.value + 1
        },
        decreament:(state)=>{
          state.value = state.value - 1
        },
        increamentByValue:(state,action:PayloadAction<number>)=>{
           state.value = state.value + action.payload
        }
    }
})

export const {increament,decreament,increamentByValue} = counterSlice.actions;

export const selectCount = (state:RootState) => state.counter.value

export default counterSlice.reducer