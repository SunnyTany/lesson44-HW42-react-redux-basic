import { all, delay, put, takeEvery } from "redux-saga/effects"
import { increment, decrement, incrementAsync, decrementAsync } from "./counterSlice"

function* incrementSaga() {
  yield delay(1000)
  yield put(increment(1))
}

function* decrementSaga() {
  yield delay(1000)
  yield put(decrement(1))
}

function* watchCounterSaga() {
  yield takeEvery(incrementAsync.type, incrementSaga)
  yield takeEvery(decrementAsync.type, decrementSaga)
}

export default function* rootSaga() {
  yield all([watchCounterSaga()])
}