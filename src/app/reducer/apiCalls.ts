import {authActions} from './authSlice'

// export const login = async(dispatch, user) => {
//     dispatch(authActions.loginStart());
//     try {
//         const res = await publicRequest.post("/Login", user);
//         dispatch(authActions.loginSuccess(res.data));
//     } catch (err) {
//         dispatch(authActions.loginFailure());
//     }
// }