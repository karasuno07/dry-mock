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

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         username: null,
//         isFetching: false,
//         error: false
//     },
//     reducers: {
//         loginStart:(state)=>{
//             state.isFetching = true;
//             state.error = false;
//         },
//         loginSuccess:(state,action)=>{
//             state.isFetching = false;
//             state.username = action.payload;
//         },
//         loginFailure:(state)=>{
//             state.isFetching = false;
//             state.error = true;
//         },
//     }
// })