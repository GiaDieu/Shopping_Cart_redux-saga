import { takeEvery, put, call } from "redux-saga/effects";
import {
  requestProducts,
  requestProductsSuccess,
  requestProductsError
} from "../actions";

export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS", fetchProductsAsync);
}

function* fetchProductsAsync() {
  try {
    yield put(requestProducts());
    const data = yield call(() => {
      return fetch("http://localhost:3001/products").then(reponse =>
        reponse.json()
      );
    });
    yield put(requestProductsSuccess(data));
  } catch (error) {
    yield put(requestProductsError());
  }
}
