import { take, call, put } from "redux-saga/effects";
import { products_url as url } from "../utils/constants";

export default function* firstSaga() {
  while (true) {
    yield take("FETCH_DATA");
    yield call(fetchData, url);
  }
}

function* fetchData(url) {
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put({ type: "FETCH_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_FAILED" });
    yield console.log(e);
  }
}
