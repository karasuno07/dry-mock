import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthReducer from './reducer/authSlice'
import ProductDetailReducer from './reducer/ProductDetailReducer';

export const store = configureStore({
   reducer: {
      auth: AuthReducer,
      productDetail: ProductDetailReducer
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
