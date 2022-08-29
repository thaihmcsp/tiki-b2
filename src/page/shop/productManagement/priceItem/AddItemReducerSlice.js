import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
export const AddItemReducerSlice = createSlice({
    name:'AddProduct',
    initialState:initialState,
    reducers:{
        LoadVarient:(state,action)=>{
            return action.payload
        }
    }
})
export const {LoadVarient} = AddItemReducerSlice.actions
export const addItemReducerSlice =  AddItemReducerSlice.reducer