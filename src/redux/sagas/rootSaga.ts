import {all} from 'redux-saga/effects';
import {
  watchFetchAppoinmentList,
  watchFetchDateSlots,
  watchFetchTimeSlotsBasedOnDate,
  watchFetchUpcomingAppoinment,
} from './userData.saga';
export default function* rootSaga() {
  yield all([
    watchFetchAppoinmentList(),
    watchFetchDateSlots(),
    watchFetchTimeSlotsBasedOnDate(),
    watchFetchUpcomingAppoinment(),
  ]);
}
