import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    }
})

export const authActions = {...authSlice.actions}

export default authSlice.reducer
