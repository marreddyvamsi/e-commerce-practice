import firstSaga from "./firstSaga";
import secondSaga from "./secondSaga";
import { all, fork, spawn } from "redux-saga/effects";

export default function* rootSaga() {
  yield spawn(firstSaga);
  yield spawn(secondSaga);
}
