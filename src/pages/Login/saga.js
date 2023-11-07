import { takeLatest, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./actions";
import { getAllUsers } from "../../domain/api";
import { LOGIN_REQUEST } from "./constants";

export function* handleLogin(action) {
  try {
    const users = yield call(getAllUsers);
    const userWithEmail = users.find((user) => user.email === action.payload.email && user.password === action.payload.password);
    if (!userWithEmail) {
      yield put(loginFailure("Email and Password do not match"));
    } else {
      localStorage.setItem("user", JSON.stringify(userWithEmail));
      yield put(loginSuccess(userWithEmail));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
