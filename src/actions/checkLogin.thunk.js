// /* eslint-disable import/prefer-default-export */
// import * as actions from './checkLogin.actions';
// import instance from '../core/axios';


// export const checkLogin = (data) => {
//     // eslint-disable-next-line no-console
//     console.log('checklogin thunk', data);
//     return async (dispatch) => {
//         // console.log('Я отправил данные для проверки');
//         try {
//             // dispatch(actions.checkLoginRequest());
//             const response = await instance.get('/api/checkLogin', data);
//             console.log(response);
//             dispatch(actions.checkLoginSuccess(response.data));
//         } catch (err) {
//             dispatch(actions.checkLoginFailure(err));
//         }
//     };
// };
