import { takeLatest, call, put } from "redux-saga/effects";
import { registerSuccess, registerFailure } from "./actions";
import { register } from "../../domain/api";
import { REGISTER_REQUEST } from "./constants";

export function* handleRegister(action) {
  try {
    const { fullname, email, password } = action.payload;
    const response = yield call(register, { fullname, email, password });
    if (response) {
      yield put(registerSuccess(response));
    } else {
      yield put(registerFailure("register failure"));
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
}
