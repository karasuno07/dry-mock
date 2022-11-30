import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';

const initialState = {
   selectedProduct: undefined,
   products: [],
};
export interface ProductType {
   // isLoading: boolean;
   selectedProduct?: any;
   products: any[];
   // error:
}

const baseURL = 'http://localhost:8080/api/v1/products';

export const fetchProductById = createAsyncThunk('/product', async (id: number, thunkApi) => {
   try {
      const res = await fetch(baseURL);
      const data = await res.json();
      const detail = data.find((i: any) => i.id === id);

      return detail;
   } catch (error) {
      console.error('Have problem fetching product');
   }
});

const ProductDetailReducer = createSlice({
   name: 'ProductDetail',
   initialState: initialState as ProductType,
   reducers: {
      showProduct: (state, action) => {
         state.selectedProduct = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProductById.pending, (state, action) => {
            return state;
         })
         .addCase(fetchProductById.fulfilled, (state, action) => {
            state.selectedProduct = action.payload;
            console.log(action.payload);
         })
         .addCase(fetchProductById.rejected, (state, action) => {
            if (action.payload) {
            }
         });
   },
});

export default ProductDetailReducer.reducer;
