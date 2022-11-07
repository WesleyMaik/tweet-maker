//Modules
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITranslated, translated } from "./translate";

//Selector
interface ISelector{
    slice:{
        image:string | null,
        theme:'light' | 'dim' | 'dark'
        verified:boolean,
        preview:boolean,
        url:string,
        translated:ITranslated
    }
};

//Init
const initialState:ISelector['slice'] = {
    image:null,
    theme:'light',
    verified:false,
    preview:false,
    url:'',
    translated:translated('PT')
};

//Slice
export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
      setImage: (state, { payload }:PayloadAction<string | null>) => {
        return {...state, image:payload}
      },
      setTheme: (state, { payload }:PayloadAction<"light" | "dim" | "dark">) => {
        return {...state, theme:payload}
      },
      setVerified: (state, { payload }:PayloadAction<boolean>) => {
        return {...state, verified:payload}
      },
      setPreview: (state, { payload }:PayloadAction<boolean>) => {
        return {...state, preview:payload}
      },
      setUrl: (state, { payload }:PayloadAction<string>) => {
        return {...state, url:payload}
      },
      setLang: (state, { payload }:PayloadAction<"PT" | "EN">) => {
        return {...state, translated:translated(payload)}
      },
    },
});

//Actions
export const { setImage, setTheme, setVerified, setPreview, setUrl, setLang } = slice.actions;

//Selector method
export const getSliceData = (state:ISelector) => state.slice;

//Reducer
export default slice.reducer;