import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import { message } from "antd";
import {
  companyUpdateCompanyRedux,
  companyUpdateLoadingRedux,
  companyUpdatePaginationRedux,
} from "./company-slice";
import {
  requestCompanyGetCompany,
  requestCompanyGetCompanyById,
} from "./company-requests";

function* handleCompanyGetCompany(dataGetCompany: any): Generator<any> {
  console.log(
    "🚀 ~ function*handleCompanyGetCompany ~ dataGetCompany:",
    dataGetCompany
  );
  console.log(
    "🚀 ~ function*handleCompanyGetCompany ~  dataGetCompany?.payload?.size:",
    dataGetCompany?.payload?.size
  );
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const response: any = yield call(
      requestCompanyGetCompany,
      dataGetCompany?.payload?.companyName,
      dataGetCompany?.payload?.size,
      dataGetCompany?.payload?.page
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateCompanyRedux({ companys: response?.data?.result?.content })
      );
      yield put(
        companyUpdatePaginationRedux({
          paginationCompany: {
            pageNumber: response?.data?.result?.pageNumber,
            pageSize: response?.data?.result?.pageSize,
            totalElements: response?.data?.result?.totalElements,
            totalPages: response?.data?.result?.totalPages,
            numberOfElements: response?.data?.result?.numberOfElements,
          },
        })
      );
      message.success("Load dữ liệu công ty thành công.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}
function* handleCompanyGetCompanyById(dataGetById: any): Generator<any> {
  try {
    yield put(companyUpdateLoadingRedux({ loadingCompany: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestCompanyGetCompanyById,
      dataGetById?.payload?.companyId,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      message.success("Load dữ liệu công ty thành công.");
      yield put(companyUpdateCompanyRedux({ company: response.data.result }));
    } else {
      // message.error("Tạo công ty thất bại.");
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}

export { handleCompanyGetCompany, handleCompanyGetCompanyById };
