import {createSlice} from "@reduxjs/toolkit";

const jsonSlice=createSlice({
    name:'json',
    initialState:[],
    reducers:{
        updateJson:(state,action)=>{
            return action.payload
        },
        removeJson:(state,action)=>{
            return null;
        }
    }
})

export const {updateJson, removeJson}=jsonSlice.actions;

export default jsonSlice.reducer;