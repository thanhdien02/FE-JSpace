import { takeLatest } from "redux-saga/effects";
import {

  productGetProduct,
} from "./product-slice";
import {
  handleProductGetProduct,
} from "./product-handlers";

export default function* authSaga() {
  yield takeLatest(productGetProduct.type, handleProductGetProduct);
}
