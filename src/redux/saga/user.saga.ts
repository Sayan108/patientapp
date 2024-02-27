// // userSaga.js

// import {call, put, takeEvery} from 'redux-saga/effects';

// function* fetchUserDataSaga(action) {
//   try {
//     yield put(fetchUserRequest());
//     const {userId} = action.payload; // Extract userId from action payload
//     const userData = yield call(getUserData, userId); // Pass userId to the API call
//     yield put(fetchUserSuccess(userData));
//   } catch (error) {
//     yield put(fetchUserFailure(error.message));
//   }
// }

// export function* watchFetchUserData() {
//   yield takeEvery('user/fetchUser', fetchUserDataSaga);
// }
