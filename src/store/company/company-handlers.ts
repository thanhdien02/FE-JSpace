import { call, put } from "redux-saga/effects";
import { message } from "antd";
import {
  companyUpdateCompanyByIdRedux,
  companyUpdateCompanyRedux,
  companyUpdateLoadingRedux,
  companyUpdatePaginationRedux,
} from "./company-slice";
import {
  requestCompanyGetCompany,
  requestCompanyGetCompanyById,
} from "./company-requests";

function* handleCompanyGetCompany(dataGetCompany: any): Generator<any> {
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
    const response: any = yield call(
      requestCompanyGetCompanyById,
      dataGetById?.payload?.company_id,
      dataGetById?.payload?.candidate_id
    );
    if (response?.data?.code === 1000) {
      yield put(
        companyUpdateCompanyByIdRedux({ companyById: response.data.result })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(companyUpdateLoadingRedux({ loadingCompany: false }));
  }
}

export { handleCompanyGetCompany, handleCompanyGetCompanyById };
