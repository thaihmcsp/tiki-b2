import {createSlice} from '@reduxjs/toolkit'
const initialState = []
export const ImageSliceReducer = createSlice({
    name:'uploadImages',
    initialState:initialState,
    reducers:{
        loadImages:((state,action)=>{
            return action.payload
        })
    }
})
export const { loadImages } = ImageSliceReducer.actions
export const ImageSlice =  ImageSliceReducer.reducer