import { put, takeEvery, call } from "@redux-saga/core/effects";
import { single_product_url as url } from "../utils/constants";

export default function* secondSaga() {
  yield takeEvery("SINGLE_FETCH", fetchSingleProduct);
}

function* fetchSingleProduct(action) {
  try {
    const response = yield fetch(url + action.payload);
    const data = yield response.json();
    yield put({ type: "SINGLE_FETCH_SUCCESS", payload: data });
  } catch (e) {
    console.log(e);
    yield put({ type: "SINGLE_FETCH_FAIL" });
  }
}
