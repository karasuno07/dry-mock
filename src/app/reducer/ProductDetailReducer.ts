import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   id: '',
};
export interface ProductType {
   id: string;
}

const baseURL = 'https://api.sampleapis.com/coffee/hot';

export const fetchUserById = createAsyncThunk('/product', async (id: string) => {
   const res = await fetch(baseURL);
   const data = await res.json();
   const detail = data.find((i: any)  => i.id === id)
   return detail;
});

const ProductDetailReducer = createSlice({
   name: 'ProductDetail',
   initialState: initialState as ProductType,
   reducers: {
      showProduct: (state, action) => {
         state.id = action.payload;
         return state;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchUserById.pending, (state, action) => {
            return state;
         })
         .addCase(fetchUserById.fulfilled, (state, action) => {
            console.log('===,re',action.payload);
            return state = {...action.payload};
         })
         .addCase(fetchUserById.rejected, (state, action) => {
            return state;
         });
   },
});

export default ProductDetailReducer.reducer;
