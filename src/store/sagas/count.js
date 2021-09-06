import { put } from "redux-saga/effects";
import { setCount } from "../features/count";

export function* increaseCount(payload) {
  try {
    let result = payload.count + 1;
    yield put(setCount(result));
  } catch (e) {
    console.log(e);
  }
}
