import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '~/interceptors/axiosClient';

const authURL = 'http://localhost:8080/api/v1/auth/login';

const initialState = {
   isAuthenticated: false,
   token: '',
};

export const login = createAsyncThunk<any, any>(
  'auth/login',
  async (data) => {
    const response = await axiosClient.post("/auth/login", data);
   console.log(response.data);

    if (response.status < 200 || response.status >= 300) {
      return null;
    }
    
    window.localStorage.setItem('TokenLogin', JSON.stringify(response.data));
    return response.data;
  }
);

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: () => initialState,
      addToken: (state: any, action) => {
         state.token = localStorage.getItem('access_token');
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state, action) => {
            return state;
         })
         .addCase(login.fulfilled, (state, { payload }) => {
            return {
              ...state,
               isAuthenticated: true,}
       
         })
         .addCase(login.rejected, (state, action) => {
            return {
             ...state,
               isAuthenticated: false,
            }
         });
   },
});
function authHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
     return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
  } else {
     return { Authorization: '' }; // for Spring Boot back-end
  }
}
export const authActions = { ...authSlice.actions };

export default authSlice.reducer;

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
