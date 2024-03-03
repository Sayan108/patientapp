import {put, takeEvery, all, call} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';
import {
  appoinmentListFailure,
  appoinmentListRequested,
  appoinmentListSucess,
  dateSlotFailure,
  dateSlotRequested,
  dateSlotSucess,
  timeSlotFailure,
  timeSlotRequested,
  timeSlotSucess,
  upcomingAppoinmentFailure,
  upcomingAppoinmentRequested,
  upcomingAppoinmentSucess,
  userDataSlice,
} from '../silces/userdata.slice';
import {
  IAppoinment,
  appointments,
  dateSlots,
  timeSlots,
} from '../redux.constants';

function* fetchUpcomingAppoinment(
  action: ActionType<typeof upcomingAppoinmentRequested>,
) {
  try {
    yield put(upcomingAppoinmentSucess(appointments[5]));
  } catch (error) {
    yield put(upcomingAppoinmentFailure(error));
  }
}

export function* watchFetchUpcomingAppoinment() {
  yield takeEvery(upcomingAppoinmentRequested.type, fetchUpcomingAppoinment);
}

function* fetchAppoinmentList(
  action: ActionType<typeof appoinmentListRequested>,
) {
  try {
    const data: IAppoinment[] = appointments;
    yield put(appoinmentListSucess(data));
  } catch (error) {
    yield put(appoinmentListFailure(error));
  }
}

export function* watchFetchAppoinmentList() {
  yield takeEvery(appoinmentListRequested.type, fetchAppoinmentList);
}

function* fetchDateSlots(action: ActionType<typeof dateSlotRequested>) {
  try {
    yield put(dateSlotSucess(dateSlots));
  } catch (error) {
    yield put(dateSlotFailure(error));
  }
}

export function* watchFetchDateSlots() {
  yield takeEvery(upcomingAppoinmentRequested.type, fetchDateSlots);
}

function* fetchTimeSlotsBasedOnDate(
  action: ActionType<typeof timeSlotRequested>,
) {
  try {
    yield put(timeSlotSucess(timeSlots));
  } catch (error) {
    yield put(timeSlotFailure(error));
  }
}

export function* watchFetchTimeSlotsBasedOnDate() {
  yield takeEvery(upcomingAppoinmentRequested.type, fetchTimeSlotsBasedOnDate);
}
