import { call, put } from "redux-saga/effects";

import { message } from "antd";
import {
  productUpdateLoadingRedux,
  productUpdatePaginationRedux,
  productUpdateProductRedux,
} from "./product-slice";
import {
  requestProductGetProduct,
} from "./product-requests";

function* handleProductGetProduct(dataGetProduct: any): Generator<any> {
  try {
    yield put(
      productUpdateLoadingRedux({
        loadingProduct: true,
      })
    );
    const response: any = yield call(
      requestProductGetProduct,
      dataGetProduct?.payload?.page,
      dataGetProduct?.payload?.size
    );
    if (response.data.code === 1000) {
      yield put(
        productUpdateProductRedux({
          products: response.data.result.content,
        })
      );
      yield put(
        productUpdatePaginationRedux({
          paginationProduct: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(
      productUpdateLoadingRedux({
        loadingProduct: false,
      })
    );
  }
}

export { handleProductGetProduct };
