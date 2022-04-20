import axios from "axios";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";

import { GET_LAUNCH_REQUEST } from "./actionTypes";
import {
  getLaunchListRequest,
  getLaunchListSuccess,
  getLaunchListFail,
} from "./actions";

// TODO: Can be converted as a reusable method
const getListApi = async () =>
  await axios.get("https://api.spacexdata.com/v3/launches");

function* getListSaga() {
  try {
    yield call(getLaunchListRequest);
    const data = yield call(getListApi);
    yield put(getLaunchListSuccess(data));
  } catch (err) {
    yield put(call(getLaunchListFail(err)));
  }
}

function* launchSaga() {
  yield takeLatest(GET_LAUNCH_REQUEST, getListSaga);
}

export default function* rootSaga() {
  yield all([fork(launchSaga)]);
}
