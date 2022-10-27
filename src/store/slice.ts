//Modules
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Selector
interface ISelector{
    slice:{
        theme:'light' | 'dim' | 'dark',
        image:string | null,
        verified:boolean
    }
};

//Init
const initialState:ISelector['slice'] = {
    theme:'light',
    image:null,
    verified:false
};

//Slice
export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
      setTheme: (state, { payload }:PayloadAction<'light' | 'dim' | 'dark'>) => {
        return {...state, theme: payload}
      },
      setImage: (state, { payload }:PayloadAction<string | null>) => {
        return {...state, image:payload}
      },
      setVerified: (state, { payload }:PayloadAction<boolean>) => {
        return {...state, verified:payload}
      },
    },
})

//Actions
export const { setTheme, setImage, setVerified } = slice.actions;

//Selector method
export const getSliceData = (state:ISelector) => state.slice;

//Reducer
export default slice.reducer;